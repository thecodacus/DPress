actor {
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
  public query ({ caller }) func whoami() : async Principal {
    return caller;
  };
};
