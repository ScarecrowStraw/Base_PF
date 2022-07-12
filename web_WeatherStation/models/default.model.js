module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        data:{
            co2: String,
            time:{
                mm: String,
                dd: String,
                h: String,
                m: String
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
    const Default = mongoose.model("defaults", schema);
    return Default;
  };

  