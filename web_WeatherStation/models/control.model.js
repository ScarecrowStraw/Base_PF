module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        state: String,
        repeat: String,
        time_start: String,
        execution_time: String
      },
      { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const Control = mongoose.model("control", schema);
    return Control;
  };