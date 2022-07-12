module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        id: String,
        hum: String,
        tem: String,
        bug: String
      },
      { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const Tutorial = mongoose.model("tutorial", schema);
    return Tutorial;
  };

  