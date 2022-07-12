#include <SPI.h>
#include <RH_RF95.h>
#include <SoftwareSerial.h>
#include "Adafruit_SI1145.h"

// Singleton instance of the radio driver
Adafruit_SI1145 uv = Adafruit_SI1145();
RH_RF95 rf95;
float frequency = 915.0;  //frequency settings
String temp, UVint;
float temperature,humidity,tem,hum;
char tem_1[8]={"\0"},hum_1[8]={"\0"};
char *node_id = "<12345>";  //From LG01 via web Local Channel settings on MQTT.Please refer <> dataformat in here.
uint8_t datasend[64];
unsigned int count = 1;
char                 databuffer[35],weatherdata[35];
bool checkweather_ = false;
volatile int counter;
void setup()
{
      Serial.begin(9600);
      Serial1.begin(9600);
      Serial.println(F("Start MQTT Example"));
      uv.begin();
      attachInterrupt(digitalPinToInterrupt(3),counting,RISING);
          if (!rf95.init())
      Serial.println(F("init failed"));
         rf95.setFrequency(frequency);
         rf95.setTxPower(20);
         rf95.setSpreadingFactor(7);
        rf95.setSignalBandwidth(125000);
        rf95.setCodingRate4(5);
        //rf95.setSyncWord(0x34);

}
void Json(String weather,String count,String light){
  temp = "{";
  temp += "\"key\":";
  temp += 0001;
  temp += ",";
  temp += "\"weather\":";
  temp += weather;
  temp += ",";
  temp += "\"c\":";
  temp += count;
  temp += ",";
  temp += "\"l\":";
  temp += light;
  temp += "}";
  //Serial.println(temp);
}
void lightsensor(){
  float UVindex = uv.readUV();
  UVindex /= 100.0; 
  UVint = String(UVindex,2);
}
void  counting(){
  counter+=1;
  //Serial.println(counter);
  
}

void checkweather(){
  if (weatherdata[0]=='c'&&weatherdata[4]=='s'&&weatherdata[8]=='g'&&weatherdata[12]=='t'&&weatherdata[16]=='r'&&weatherdata[20]=='p'&&weatherdata[24]=='h'&&weatherdata[27]=='b'){
    checkweather_ = true;
  }
  else checkweather_ = false;
}

void getweather(){
  int index;
  for (index = 0;index < 35;index ++){
 //   Serial.println(index);
    if(Serial1.available()){
      weatherdata[index] = Serial1.read();
      if (weatherdata[0] != 'c')
      {
        index = -1;
      }
    }
    else
    {
      index --;
    }
  }

//  Serial.println(databuffer);
  checkweather();
  delay(1000);
}

void datapack(){
  String data = "";
  data = data + String(temp);
  for (int i = 0; i < data.length(); i++){
    databuffer[i] = data[i];
  }
  Serial.println(data);
  strcpy((char *)datasend,databuffer);
}

void SendData(){

      Serial.println(F("Sending data to LG01"));
      rf95.send((char *)datasend,sizeof(datasend));  
      rf95.waitPacketSent();  // Now wait for a reply
    
      uint8_t buf[RH_RF95_MAX_MESSAGE_LEN];
      uint8_t len = sizeof(buf);
      if (rf95.waitAvailableTimeout(3000)){ 
        // Should be a reply message for us now   
        if (rf95.recv(buf, &len)){
          Serial.print("got reply from LG01: ");
          Serial.println((char*)buf);
          Serial.print("RSSI: ");
          Serial.println(rf95.lastRssi(), DEC);    
        }
        else{
          Serial.println("recv failed");
        }
      }
      else{
        Serial.println("No reply, is LoRa server running?");
      }
}
    
    


void loop()
{
   getweather();
   if (checkweather_ == true){
      Serial.println("After checked");
      lightsensor();
      getweather(); 
      Json(String(weatherdata),String(counter),String(UVint));
      datapack();
      SendData();
    }
}
