function Contact(name, img, phone, email) {
    this.name = name;
    this.img = img;
    this.phone = phone;
    this.email = email;
  }
  
  const Contacts = {
    Beyonce: new Contact(
      "Beyonce",
      "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      "+123 456 789",
      "b@beyonce.com"
    ),
  
    JackBauer: new Contact(
      "Jack Bauer",
      "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
      "+987 654 321",
      "jack@nowhere.com"
    ),
  
    ChuckNoris: new Contact(
      "Chuck Norris",
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
      "+918 372 574",
      "gmail@chucknorris.com"
    )
  };
  
  export default Contacts;
  