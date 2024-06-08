.header{

background-image: url('pics/background.png');
height: 900px;
width: auto;


color: white;

flex-direction: column;
align-items: center;
}

.header {
    top: 0;
    position: fixed;
    color: #ffffff; /* Change the text color as needed */
    display: flex;
    justify-content: space-between;
    
    padding: 20px;
   
    height: 1000px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    color: rgb(255, 255, 255);
}

.header h1 {
    margin: 0;
   
}

.list {
    display: flex;
    width: 100%;
   
    padding-top: 0px;
    margin: 0;
}

.list ul {
    list-style: none;
    padding: 10px;
     
}

.list li {
    margin-right: 20px;
    display: flex;
    align-items: center;
    display: inline-block; 
    height: auto;
}

.list li:last-child {
    margin-right: 0;
    
}

.list li ion-icon {
    font-size: 24px;
}

.middlelist li {
padding-top: 0;
padding-left: 10px;
padding-right: 10px;
color: aqua;
list-style: none;


}
.left{

color: aquamarine;
border-left: none;
}
