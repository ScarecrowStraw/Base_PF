

#include <WaspSensorGas_Pro.h>
#include <WaspWIFI_PRO_V3.h>

/*
 * Define object for sensor: gas_PRO_sensor
 * Input to choose board socket. 
 * Waspmote OEM. Possibilities for this sensor:
 *   - SOCKET_1 
 *  - SOCKET_2
 *  - SOCKET_3
 *  - SOCKET_4
 *  - SOCKET_5
 *  - SOCKET_6
 * P&S! Possibilities for this sensor:
 *  - SOCKET_A
 *  - SOCKET_B
 *  - SOCKET_C
 *  - SOCKET_F
 */
Gas CO2_PRO_sensor(SOCKET_A);
Gas NH3_PRO_sensor(SOCKET_C);
Gas NO2_PRO_sensor(SOCKET_B);
Gas CH4_PRO_sensor(SOCKET_F);

 // choose socket (SELECT USER'S SOCKET)
///////////////////////////////////////
uint8_t socket = SOCKET0;
///////////////////////////////////////

// choose HTTP server settings
///////////////////////////////////////
char HTTP_SERVER[] = "192.168.0.104";
uint16_t HTTP_PORT = 1883;
char                 databuffer[50];
///////////////////////////////////////

uint8_t error;
uint8_t status;
unsigned long previous;

float co2r;  // Stores the concentration level in ppm

// 9378 sensor
float nh3r;   // NH3 

float no2r; // NO2
float ch4r; // CH4

float temperature;  // Stores the temperature in ºC
float humidity;   // Stores the realitve humidity in %RH
float pressure;   // Stores the pressure in Pa

char header[] = "\"name_gate\" : \"PF\"";
char id_device[] = "\"id_device\" : {\"type\" : \"WiFi\",\"group\" : \"A\",\"index_node\" : 1}";

char _t[] = "t";
char _h[] = "h";
char _p[] = "p";
char _co2[] = "co2";
char _nh3[] = "nh3";
char _ch4[] = "ch4";
char _no2[] = "no2";

char _b[] = "b";

char t[3];
char h[3];
char p[8];
char co2[9];
char nh3[8];
char ch4[8];
char no2[8];

char b[3];

char common[] = ",";
char openm[] = "{";
char closem[] = "}";

//void Json(){
//  
//  char temp[60] = "\0";
//
//  int headerLen = sizeof(header)/sizeof(char);
//  int idLen = sizeof(id_device)/sizeof(char);
//
//  strcat(temp, t);
//  strcat(temp, h);
//  strcat(temp, p);
//  strcat(temp, co2);
//  strcat(temp, nh3);
//  strcat(temp, ch4);
//  strcat(temp, no2);
//  strcat(temp, b);
//
//  for(int i = 0; i < 60; i++){
//    data[i] = '\0';
//  }
//  strcpy(data, temp);
//
//  int len = sizeof(data)/sizeof(char);
//  
//  USB.println(data);
//  USB.println(len);
//}

void setup()
{
    USB.println(F("Gas Sensors MQTT Publish"));
  
    ///////////////////////////////////////////
    // 1. Turn on the sensors
    /////////////////////////////////////////// 

    // Power on the electrochemical sensor. 
    // If the gases PRO board is off, turn it on automatically.
    // gas_PRO_sensor.ON();
    NO2_PRO_sensor.ON();
    CH4_PRO_sensor.ON(); 
    NH3_PRO_sensor.ON();

     //////////////////////////////////////////////////
    // 1. Switch ON
    //////////////////////////////////////////////////
    error = WIFI_PRO_V3.ON(socket);

    if (error == 0)
    {
      USB.println(F("1. WiFi switched ON"));
    }
    else
    {
      USB.println(F("1. WiFi did not initialize correctly"));
    }

    //////////////////////////////////////////////////
    // 2. Check if connected
    //////////////////////////////////////////////////


    // get actual time
    previous = millis();

    // check connectivity
    status =  WIFI_PRO_V3.isConnected();

    // check if module is connected
    if (status == true)
    {
      USB.println(F("2. WiFi is connected OK"));

      USB.print(F("IP address: "));
      USB.println(WIFI_PRO_V3._ip);

      USB.print(F("GW address: "));
      USB.println(WIFI_PRO_V3._gw);

      USB.print(F("Netmask address: "));
      USB.println(WIFI_PRO_V3._netmask);
    
      USB.print(F(" Time(ms):"));
      USB.println(millis() - previous);
    }
    else
    {
      USB.print(F("2. WiFi is connected ERROR"));
      USB.print(F(" Time(ms):"));
      USB.println(millis() - previous);
      PWR.reboot();
    }



    //////////////////////////////////////////////////
    // 3. Configure HTTP conection
    //////////////////////////////////////////////////

    error = WIFI_PRO_V3.mqttConfiguration(HTTP_SERVER,"user", HTTP_PORT, WaspWIFI_v3::MQTT_TLS_DISABLED);
    if (error == 0)
    {
      USB.println(F("3. MQTT conection configured"));
    }
    else
    {
      USB.print(F("3. MQTT conection configured ERROR"));
    }
    
    // First sleep time
    // After 2 minutes, Waspmote wakes up thanks to the RTC Alarm
    // PWR.deepSleep("00:00:02:00", RTC_OFFSET, RTC_ALM1_MODE1, ALL_ON);
}

void loop()
{
    char tempt[3] = "\0";
    char temph[3] = "\0";
    char tempp[8] = "\0";
    char tempco2[9] = "\0";
    char tempnh3[8] = "\0";
    char tempch4[8] = "\0";
    char tempno2[8] = "\0";

    char tempb[3] = "\0";

    //////////////////////////////////////////////////
    // 1. Switch ON
    //////////////////////////////////////////////////
    error = WIFI_PRO_V3.ON(socket);

    CO2_PRO_sensor.ON();
//
//    // NDIR gas sensor needs a warm up time at least 120 seconds  
//    // To reduce the battery consumption, use deepSleep instead delay
//    // After 2 minutes, Waspmote wakes up thanks to the RTC Alarm
    PWR.deepSleep("00:00:02:00", RTC_OFFSET, RTC_ALM1_MODE1, ALL_ON);

    if (error == 0)
    {
      USB.println(F("1. WiFi switched ON"));
    }
    else
    {
      USB.println(F("1. WiFi did not initialize correctly"));
    }
    ///////////////////////////////////////////
    // 2. Read sensors
    ///////////////////////////////////////////  

    // Read the electrochemical sensor and compensate with the temperature internally
    co2r = CO2_PRO_sensor.getConc();

    // Read enviromental variables
    temperature = CO2_PRO_sensor.getTemp();
    humidity = CO2_PRO_sensor.getHumidity();
    pressure = CO2_PRO_sensor.getPressure();

    nh3r = NH3_PRO_sensor.getConc();
    no2r = NO2_PRO_sensor.getConc();
    ch4r = CH4_PRO_sensor.getConc();

    // And print the values via USB
    USB.println(F("***************************************"));
    USB.print(F("Gas concentration: "));
    USB.print(co2);
    USB.println(F(" ppm"));
    USB.print(F("armoniac: "));
    USB.print(nh3);
    USB.println(F(" ppm"));
    USB.print(F("nitricdioxide: "));
    USB.print(no2);
    USB.println(F(" ppm"));
    USB.print(F("metan: "));
    USB.print(ch4);
    USB.println(F(" ppm"));
    USB.print(F("Temperature: "));
    USB.print(temperature);
    USB.println(F(" Celsius degrees"));
    USB.print(F("RH: "));
    USB.print(humidity);
    USB.println(F(" %"));
    USB.print(F("Pressure: "));
    USB.print(pressure);
    USB.println(F(" Pa"));

    ///////////////////////////////////////////
    // 3. Publish
    ///////////////////////////////////////////
     
    char data[52] = "\0";

    char array1[2];
    dtostrf(temperature, 2, 0, array1);
    strcat(data, _t);
    strcat(data, array1);
    // strcpy(t, tempt);
    USB.println(data);

    char array2[2];
    dtostrf(humidity, 2, 0, array2);
    strcat(data, _h);
    strcat(data, array2);
    // strcpy(h, temph);
    USB.println(data);

    char array3[7];
    dtostrf(pressure, 7, 0, array3);
    strcat(data, _p);
    strcat(data, array3);
    // strcpy(p, tempp);
    USB.println(data);

    char array0[6];
    dtostrf(co2r, 6, 1, array0); 
    strcat(data, _co2);
    strcat(data, array0);
    // strcpy(co2, tempco2);
    USB.println(data);

    char array4[5];
    dtostrf(nh3r, 5, 2, array4);
    strcat(data, _nh3);
    strcat(data, array4);
    // strcpy(nh3, tempnh3);
    USB.println(data);

    char array5[5];
    dtostrf(ch4r, 5, 2, array5);
    strcat(data, _ch4);
    strcat(data, array5);
    // strcpy(ch4, tempch4);
    USB.println(data);

    char array6[5];
    dtostrf(no2r, 5, 2, array6);
    strcat(data, _no2);
    strcat(data, array6);
    // strcpy(no2, tempno2);
    USB.println(data);

    char array7[2];
    dtostrf(PWR.getBatteryLevel(), 2, 0, array7);
    strcat(data, _b);
    strcat(data, array7);
    // strcpy(b, tempb);
    USB.println(data);

//    // temperature
//    data[0] = _t[0];
//    data[1] = array1[0];
//    data[2] = array1[1];
//
//    // humidity
//    data[3] = _h[0];
//    data[4] = array2[0];
//    data[5] = array2[1];
//
//    // pressure
//    data[6] = _p[0];
//    data[7] = array3[0];
//    data[8] = array3[1];
//    data[9] = array3[2];
//    data[10] = array3[3];
//    data[11] = array3[4];
//    data[12] = array3[5];
//    data[13] = array3[6];
//
//    // CO2
//    data[14] = _co2[0];
//    data[15] = _co2[1];
//    data[16] = _co2[2];
//    data[17] = array0[0];
//    data[18] = array0[1];
//    data[19] = array0[2];
//    data[20] = array0[3];
//    data[21] = array0[4];
//    data[22] = array0[5];
//    
//    // NH3
//    data[23] = _nh3[0];
//    data[24] = _nh3[1];
//    data[25] = _nh3[2];
//    data[26] = array4[0];
//    data[27] = array4[1];
//    data[28] = array4[2];
//    data[29] = array4[3];
//    data[30] = array4[4];
//
//    // CH4
//    data[31] = _ch4[0];
//    data[32] = _ch4[1];
//    data[33] = _ch4[2];
//    data[34] = array5[0];
//    data[35] = array5[1];
//    data[36] = array5[2];
//    data[37] = array5[3];
//    data[38] = array5[4];
//
//    // NO2
//    data[39] = _no2[0];
//    data[40] = _no2[1];
//    data[42] = _no2[2];
//    data[43] = array6[0];
//    data[44] = array6[1];
//    data[45] = array6[2];
//    data[46] = array6[3];
//    data[47] = array6[4];
//
//    // Battery
//    data[48] = _b[0];
//    data[49] = array7[0];
//    data[50] = array7[1];
//    
    data[51] = '*';

    int datalen = sizeof(data)/sizeof(char);
  
    USB.println(data);
    USB.println(datalen);

    // Json();


//    char checkmess[] = "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
//
//    int len = sizeof(checkmess)/sizeof(char);
//
//    USB.println(len);
    
    error = WIFI_PRO_V3.mqttPublishTopic("pf/node001",WaspWIFI_v3::QOS_1,WaspWIFI_v3::RETAINED,data);
    
    // error = WIFI_PRO_V3.mqttPublishTopic("pf/node001",WaspWIFI_v3::QOS_1,WaspWIFI_v3::RETAINED,checkmess);

    USB.println(error);

    // check response
    if (error == 0)
    {
      USB.println(F("Publish topic done!"));
    }
    else
    {
      USB.println(F("Error publishing topic!"));  
    }  
  
    //////////////////////////////////////////////////
    // 3. Switch OFF
    //////////////////////////////////////////////////
    WIFI_PRO_V3.OFF(socket);
    CO2_PRO_sensor.OFF();

    // Go to deepsleep  
    // After 2 minutes, Waspmote wakes up thanks to the RTC Alarm
    PWR.deepSleep("00:00:02:00", RTC_OFFSET, RTC_ALM1_MODE1, ALL_ON);
}
