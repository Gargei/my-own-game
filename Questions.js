class Questions{
    constructor(){
        this.title= createElement('h2');
    this.q1 = createButton('next');
    this.q2 = createButton('next');
    this.q3 = createButton('next');
    this.q4 = createButton('next');
    
    }

    display(){
    this.q1.position(300,300);
    this.q2.position(300,300);
    this.q3.position(300,300);
    this.q4.position(300,300);
    
        
       
        for(var i=0; i<5; i=i+1){
            
            if(this.title.html("question1")){
                this.q1.mousePressed(() =>{
                    var question1= createSprite(100,200);
                 question1.addImage(question1img)
                });
            }
            

            
                if( this.title.html("question2")){
                    this.q1.mousePressed(()=>{
                        var question2= createSprite(200,200);
                        question2.addImage(question2img);
                    });      
                }
                
               
             if( this.title.html("question3")){
                this.q3.mousePressed(()=>{
                    var question3= createSprite(250,200);
                    question3.addImage(question3img)
                    });
                 }
             
             
                if(this.title.html("question4")){
                this.q4.mousePressed(()=>{
                var question4= createSprite(300,200);
                question4.addImage(question4img);

                });
             }
            

               
                
        

                
                 
                
               
               
        
        
        
             
        }
        
    }

    }
