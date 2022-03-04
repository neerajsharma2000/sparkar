const Scene = require('Scene');

const NativeUI = require('NativeUI');

const Textures = require('Textures');


// First, we create a Promise and load all the assets we need for our scene


Promise.all([

// Loading Textures for the buttons
    
    Textures.findFirst('texture0'),
    Textures.findFirst('texture1'),
    Textures.findFirst('texture2'),
    Textures.findFirst('texture3'),
    Textures.findFirst('texture4'),
    Textures.findFirst('texture5'),
    Textures.findFirst('texture6'),
    Textures.findFirst('texture7'),
    Textures.findFirst('texture8'),
    Textures.findFirst('texture9'),



    Scene.root.findFirst('nullObject0'),
    Scene.root.findFirst('nullObject1'),
    Scene.root.findFirst('nullObject2'),
    Scene.root.findFirst('nullObject3'),
    Scene.root.findFirst('nullObject4'),
    Scene.root.findFirst('nullObject5'),
    Scene.root.findFirst('nullObject6'),
    Scene.root.findFirst('nullObject7'),
    Scene.root.findFirst('nullObject8'),
    Scene.root.findFirst('nullObject9'),


// we can start using our assets and creating the NativeUI Picker    

]).then(function(results){

    
// First, we set the buttons for the NativeUI Picker

    const button1 = results[0];

    const button2 = results[1];

    const button3 = results[2];
    const button4 = results[3];

    const button5 = results[4];

    const button6 = results[5];
    const button7 = results[6];

    const button8 = results[7];

    const button9 = results[8];

    const button10 = results[9];


// Next, we set the Null Objacts for the switch

    const Obj0 = results[10];

    const Obj1 = results[11];

    const Obj2 = results[12];
    const Obj3 = results[13];

    const Obj4 = results[14];

    const Obj5 = results[15];

    const Obj6 = results[16];

    const Obj7 = results[17];

    const Obj8 = results[18];

    const Obj9 = results[19];


// Now, we can finally start building the NativeUI Picker
    
    const configuration = {

      selectedIndex: 0,

// These are the image textures to use as the buttons in the NativeUI Picker
        
      items: [

        {image_texture: button1},

        {image_texture: button2},

        {image_texture: button3},
        {image_texture: button4},

        {image_texture: button5},
        {image_texture: button6},

        {image_texture: button7},

        {image_texture: button8},
        {image_texture: button9},

        {image_texture: button10}

      ]

    };
    Obj0.hidden = false;
    Obj1.hidden = true;
    Obj2.hidden = true;
    Obj3.hidden = true;
    Obj4.hidden = true;
    Obj5.hidden = true;
    Obj6.hidden = true;
    Obj7.hidden = true;
    Obj8.hidden = true;
    Obj9.hidden = true;
// Create the NativeUI Picker

    const picker = NativeUI.picker;

    picker.configure(configuration);

    picker.visible = true;


 // This is a monitor that watches for the picker to be used.
    
    picker.selectedIndex.monitor().subscribe(function(val) {


      switch(val.newValue) {

        case 0: {

           Obj0.hidden = false;
           Obj1.hidden = true;
           Obj2.hidden = true;
           Obj3.hidden = true;
           Obj4.hidden = true;
           Obj5.hidden = true;
           Obj6.hidden = true;
           Obj7.hidden = true;
           Obj8.hidden = true;
           Obj9.hidden = true;
           

           break;

        }

        case 1: {

          Obj0.hidden = true;
          Obj1.hidden = false;
          Obj2.hidden = true;
          Obj3.hidden = true;
          Obj4.hidden = true;
          Obj5.hidden = true;
          Obj6.hidden = true;
          Obj7.hidden = true;
          Obj8.hidden = true;
          Obj9.hidden = true;
          

          break;

       }

        case 2: {

          Obj0.hidden = true;
          Obj1.hidden = true;
          Obj2.hidden = false;
          Obj3.hidden = true;
          Obj4.hidden = true;
          Obj5.hidden = true;
          Obj6.hidden = true;
          Obj7.hidden = true;
          Obj8.hidden = true;
          Obj9.hidden = true;
          

          break;

      }

        case 3: {

          Obj0.hidden = true;
          Obj1.hidden = true;
          Obj2.hidden = true;
          Obj3.hidden = false;
          Obj4.hidden = true;
          Obj5.hidden = true;
          Obj6.hidden = true;
          Obj7.hidden = true;
          Obj8.hidden = true;
          Obj9.hidden = true;
          

          break;

      }

      case 4: {

        Obj0.hidden = true;
        Obj1.hidden = true;
        Obj2.hidden = true;
        Obj3.hidden = true;
        Obj4.hidden = false;
        Obj5.hidden = true;
        Obj6.hidden = true;
        Obj7.hidden = true;
        Obj8.hidden = true;
        Obj9.hidden = true;
        

        break;

    }

    case 5: {

      Obj0.hidden = true;
      Obj1.hidden = true;
      Obj2.hidden = true;
      Obj3.hidden = true;
      Obj4.hidden = true;
      Obj5.hidden = false;
      Obj6.hidden = true;
      Obj7.hidden = true;
      Obj8.hidden = true;
      Obj9.hidden = true;
      

      break;

    }

    case 6: {

      Obj0.hidden = true;
      Obj1.hidden = true;
      Obj2.hidden = true;
      Obj3.hidden = true;
      Obj4.hidden = true;
      Obj5.hidden = true;
      Obj6.hidden = false;
      Obj7.hidden = true;
      Obj8.hidden = true;
      Obj9.hidden = true;
      

      break;

   }

      case 7: {

        Obj0.hidden = true;
        Obj1.hidden = true;
        Obj2.hidden = true;
        Obj3.hidden = true;
        Obj4.hidden = true;
        Obj5.hidden = true;
        Obj6.hidden = true;
        Obj7.hidden = false;
        Obj8.hidden = true;
        Obj9.hidden = true;
        

        break;

      }

      case 8: {

        Obj0.hidden = true;
        Obj1.hidden = true;
        Obj2.hidden = true;
        Obj3.hidden = true;
        Obj4.hidden = true;
        Obj5.hidden = true;
        Obj6.hidden = true;
        Obj7.hidden = true;
        Obj8.hidden = false;
        Obj9.hidden = true;
        

        break;

    }

      case 9: {

        Obj0.hidden = true;
        Obj1.hidden = true;
        Obj2.hidden = true;
        Obj3.hidden = true;
        Obj4.hidden = true;
        Obj5.hidden = true;
        Obj6.hidden = true;
        Obj7.hidden = true;
        Obj8.hidden = true;
        Obj9.hidden = false;
        

        break;

    }

    

      }


    });

    
});