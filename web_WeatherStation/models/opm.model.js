module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name_gate: String,
        id_device:{
            type: String,
            group: String,
            index_node: String
        },
        data:{
            id: String,
            time:{
                mm: String,
                dd: String,
                d : String,
                m : String
            },
            tem : String,
            humidity : String,
            pressusre: String,
            co2: String,
            nh3: String,
            ch4: String,
            co2: String,
            battery: String
        },
        state_pump: {
            state: String,
            time_execution:{
                time_repeat: String,
                time_start: String
            }
        }
      },
      { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const PF = mongoose.model("pf", schema);
    return PF;
  };

  