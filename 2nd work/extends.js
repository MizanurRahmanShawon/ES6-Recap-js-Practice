class teamMember {
  name;
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  providFeedback() {
    console.log("${this.name} thank you for your    feedback");
  }
}

class Instructor extends teamMember {
  //   name;
  designation = "web course Instructor";
  team = "web team";
  constructor(name, location) {
    // this.name = name;
    // this.location = location;
    super(name, location);
  }
  startSupportsession(time) {
    console.log("start the support sessio at ${time}");
  }
  createQuiz(module) {
    console.log("please create quzi for module ${mosule}");
  }
  provideFeedback() {
    console.log("${this.name}thank you for your feedback");
  }
}

class Developer extends teamMember {
  //   name;
  designation = "web course Instructor";
  team = "web team";
  tech;
  constructor(name, location, tech) {
    super(name, location);
    // this.name = name;
    // this.location = location;
    this.tech = tech;
  }
  developerFeature(feature) {
    console.log("please devolpo this  ${feature}");
  }
  release(version) {
    console.log("please relese the ${version}");
  }
  //   provideFeedback() {
  //     console.log("${this.name}thank you for your feedback");
  //   }
}

class jobPlacement extends teamMember {
  //   name;
  designation = "job placement commandos";
  team = "job Placement";
  region;
  //   tech;
  constructor(name, location, tech) {
    super(name, location);
    // this.name = name;
    // this.location = location;
    // this.tech = tech;
    this.region = region;
  }
  provideResume(feature) {
    console.log("please devolpo this  ${feature}");
  }
  prepareStudent(version) {
    console.log("please relese the ${version}");
  }
  //   provideFeedback() {
  //     console.log("${this.name}thank you for your feedback");
  //   }
}
const nirob = new Developer("nirob", "Dhaka", "Bangladesh");
console.log(nirob);
nirob.providFeedback();
const jahid = new jobPlacement("jahid", "dhaka", "Bnagladesh");
console.log(jahid);
