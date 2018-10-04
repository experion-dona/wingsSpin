import { Component, OnInit } from '@angular/core';
import * as createjs from 'createjs-module';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.css']
})
export class WheelComponent implements OnInit {
  spinConfigurationForm: FormGroup;
  canvas;
  stage;
  shape;
  section1;
  section2;
  section3;
  section4;
  section5;
  section6;
  section7;
  section8;
  section9;
  section10;
  section11;
  section12;
  dataUrl;
  count: number = 0;
  constructor(private formBuilder:FormBuilder) {
    this.spinConfigurationForm = this.formBuilder.group({
      section1: ['90', [Validators.required]],
      section2: ['28', [Validators.required]],
      section3: ['10', [Validators.required]],
      section4: ['200', [Validators.required]],
      section5: ['90', [Validators.required]],
      section6: ['180', [Validators.required]],
      section7: ['12', [Validators.required]],
      section8: ['1', [Validators.required]],
      section9: ['15', [Validators.required]],
      section10: ['21', [Validators.required]],
      section11: ['18', [Validators.required]],
      section12: ['9', [Validators.required]]
    });
   }

  ngOnInit() {
    this.canvas = document.getElementById("testCanvas");
    this.stage = new createjs.Stage(this.canvas);
    var image = new Image();
    image.src = "./assets/Image/waltonortho.jpg";
    image.onload = this.handleImageLoad;
    this.stage.update();

  }
  tick = (event) => {
    this.stage.update(event);
  }
  handleImageLoad = (event) => {
    var image = event.target;
    var bitmap = new createjs.Bitmap(image);
    this.stage.addChild(bitmap);

    this.stage.update();
    this.section1= new createjs.Text(this.spinConfigurationForm.controls['section1'].value, "20px Arial", "#003300");
    this.section2 = new createjs.Text(this.spinConfigurationForm.controls['section2'].value, "20px Arial", "#003300");
    this.section3 = new createjs.Text(this.spinConfigurationForm.controls['section3'].value, "20px Arial", "#003300");
    this.section4 = new createjs.Text(this.spinConfigurationForm.controls['section4'].value, "20px Arial", "#003300");
    this.section5= new createjs.Text(this.spinConfigurationForm.controls['section5'].value, "20px Arial", "#003300");
    this.section6 = new createjs.Text(this.spinConfigurationForm.controls['section6'].value, "20px Arial", "#003300");
    this.section7 = new createjs.Text(this.spinConfigurationForm.controls['section7'].value, "20px Arial", "#003300");
    this.section8 = new createjs.Text(this.spinConfigurationForm.controls['section8'].value, "20px Arial", "#003300");
    this.section9= new createjs.Text(this.spinConfigurationForm.controls['section9'].value, "20px Arial", "#003300");
    this.section10 = new createjs.Text(this.spinConfigurationForm.controls['section10'].value, "20px Arial", "#003300");
    this.section11 = new createjs.Text(this.spinConfigurationForm.controls['section11'].value, "20px Arial", "#003300");
    this.section12= new createjs.Text(this.spinConfigurationForm.controls['section12'].value, "20px Arial", "#003300");
    this.section1.x = 235;
    this.section1.y = 93.125;
    this.section2.x = 326.5;
    this.section2.y = 110;
    this.section3.x =  394.5; 
    this.section3.y = 178; 
    this.section4.x = 414.5; 
    this.section4.y =  267;
    this.section5.x = 388.5;
    this.section5.y = 352;
    this.section6.x = 325.5;
    this.section6.y = 414;
    this.section7.x =  236.5; 
    this.section7.y = 440; 
    this.section8.x = 149.5; 
    this.section8.y = 416;
    this.section9.x = 86.5;
    this.section9.y = 352;
    this.section10.x = 62.5;
    this.section10.y = 264;
    this.section11.x =  83.5; 
    this.section11.y = 177; 
    this.section12.x = 150.5; 
    this.section12.y = 112;
    this.stage.addChild(this.section1,this.section2,this.section3,this.section4,
      this.section5,this.section6,this.section7,this.section8,this.section9,
      this.section10,this.section11,this.section12);
    this.section1.on("pressmove", (evt) => {
      this.placePointOnDestination(evt);

    });
    this.section2.on("pressmove", (evt) => {
      this.placePointOnDestination(evt);

    });
    this.section3.on("pressmove", (evt) => {
      this.placePointOnDestination(evt);

    });
    this.section4.on("pressmove", (evt) => {
      this.placePointOnDestination(evt);

    });
    this.section5.on("pressmove", (evt) => {
      this.placePointOnDestination(evt);

    });
    this.section6.on("pressmove", (evt) => {
      this.placePointOnDestination(evt);

    });
    this.section7.on("pressmove", (evt) => {
      this.placePointOnDestination(evt);

    });
    this.section8.on("pressmove", (evt) => {
      this.placePointOnDestination(evt);

    });
    this.section9.on("pressmove", (evt) => {
      this.placePointOnDestination(evt);

    });
    this.section10.on("pressmove", (evt) => {
      this.placePointOnDestination(evt);

    });
    this.section11.on("pressmove", (evt) => {
      this.placePointOnDestination(evt);

    });
    this.section12.on("pressmove", (evt) => {
      this.placePointOnDestination(evt);

    });
    // this shape will be the background for the text:
    this.shape = new createjs.Shape();
    this.shape.x = this.section1.x;
    this.shape.y = this.section1.y;
    this.shape.rotation = this.section1.rotation;
    this.stage.addChildAt(this.shape, 0);
    // we want to do some work before we update the canvas,
    // otherwise we could use Ticker.addEventListener("tick", stage);
    createjs.Ticker.framerate = 100;
    createjs.Ticker.addEventListener("tick", this.tick);
  }
  placePointOnDestination(text) {
    text.currentTarget.x = text.stageX;
    text.currentTarget.y = text.stageY;
    this.stage.update(); //much smoother because it refreshes the screen every pixel movement instead of the FPS set on the Ticker
    console.log('X & y:',text.stageX,text.stageY)
  }
  onSectionPointChange=(section)=>{
    switch(section){
      case 1:
      this.section1.text = this.spinConfigurationForm.controls['section1'].value;
      break;
      case 2:
      this.section2.text = this.spinConfigurationForm.controls['section2'].value;
      break;
      case 3:
      this.section3.text =this.spinConfigurationForm.controls['section3'].value;
      break;
      case 4:
      this.section4.text = this.spinConfigurationForm.controls['section4'].value;
      break;
      case 5:
      this.section5.text = this.spinConfigurationForm.controls['section5'].value;
      break;
      case 6:
      this.section6.text = this.spinConfigurationForm.controls['section6'].value;
      break;
      case 7:
      this.section7.text =this.spinConfigurationForm.controls['section7'].value;
      break;
      case 8:
      this.section8.text = this.spinConfigurationForm.controls['section8'].value;
      break;
      case 9:
      this.section9.text = this.spinConfigurationForm.controls['section9'].value;
      break;
      case 10:
      this.section10.text = this.spinConfigurationForm.controls['section10'].value;
      break;
      case 11:
      this.section11.text =this.spinConfigurationForm.controls['section11'].value;
      break;
      case 12:
      this.section12.text = this.spinConfigurationForm.controls['section12'].value;
      break;


    }
    this.stage.update();
  }
  onSubmit(){
    // for(var i=1; i<5; i++){

    // }
    this.stage.update();
    var myCanvas = document.getElementById("testCanvas") as HTMLCanvasElement;
    this.dataUrl = myCanvas.toDataURL();
  }
}