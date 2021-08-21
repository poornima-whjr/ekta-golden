class Login {
   constructor() {
      // this.input = createInput("Username");
      this.heading = createElement("h1");
      //this.log = createButton("Logical Reasoning");
      this.signIn = createButton("Sign In");
      this.signUp = createButton("Sign Up");
      // this.math = createButton("Mathematics");
      this.userId = createInput("User Id");
      this.password = createInput("Password");
      //this.password.setAttribute("type", "password");

   }

   hide() {
      this.input.hide();
      this.heading.hide();
      var bg = createSprite(0, 0);
      bg.addImage(background1);
      bg.x = bg.width / 2;
      bg.y = height / 2;
      bg.velocityX = -5;
      if (bg.x < 0) {
         bg.x = bg.width / 2;
      }
   }

   hideLogin() {
      this.userId.hide();
      this.password.hide();
      this.signIn.hide();
      this.signUp.hide();
   }

   displayLogin() {
      this.userId.position(1000, 450);
      this.signIn.position(1200, 450);
      this.signUp.position(1400, 450);
      this.password.position(800, 450);
      this.heading.html("Space Cadets");
      this.heading.position(1000, 300);

      this.signUp.mousePressed(() => {
         this.hideLogin()
         var usIdbox = createInput("UserId");
         usIdbox.position(1000, 450);
         var passwordBox = createInput("Set Password");
         //passwordBox.setAttribute("type", "password");
         passwordBox.position(800, 450);
         var grade = createElement("SELECT");
         grade.position(1200, 450);
         var class1 = createElement("option");
         class1.text="grade 1"
         grade.appendChild(class1);
      })

      this.signIn.mousePressed(() => {

         userId = this.userId.value;

      })


   }

   /* display(){
        this.heading.html("Space Cadets");
       
        this.log.position(900,700);
        this.math.position(1100,700);
        this.heading.position(1000,300);
        this.input.position(1000,500);
        } */


}

