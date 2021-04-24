<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Andrei Pavanello Personal</title>
    <link rel="stylesheet" href="/style.css">
    <link rel="stylesheet" href="userPage.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@900&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js"></script>




</head>
<body>



    <!------------------------------------HEADER -------------------------------------------->

       <nav class="navMain">
        <div class="navContainer">
            <a href="/" class="navLogo"><img src="/logo.png" alt="logo" id="logo"></a>
             <ul class="navbarMenu">
                 
                <li class="navbarItem">
                    <a href="/" class="navbarLinks" id="home-page">Home</a>
                </li>
                <li class="navbarItem">
                    <a href="/services" class="navbarLinks" id="services-page">Serviços</a>
                </li>
                 
                <li class="navbarItem">
                    <a href="/contacts" class="navbarLinks" id="contact-page">Contato</a>
                </li>
                <li class="navbarItem">
                    <a href="/userStats" class="navbarLinks" id="userStats-page">Desempenho</a>
                </li>
                 <li class="navbarItem">
                       <a href="/adminCheck" class="navbarLinks" id="adminPage" style="visibility:hidden">Alunos</a>
                </li>
                <li class="navbarItem">
                       <a href="/register" class="navbarLinks" id="registerPage" style="visibility:hidden">Registrar</a>
                </li>
                
                 
                <li class="navbarBtn">
                     <a href="/login" class="button" onclick="cookieDelete(),cookieDeleteAdmin()">Logout</a>
                </li>

             </ul>
            
        </div>
    </nav>

    


    <script>





        function cookieDelete(){
                                   

                    var cookieValue =  localStorage.getItem('emailLogin');
                    
                    document.cookie = "myEmail=" + cookieValue + ";expires="+new Date(2018,12,25).toUTCString();
        }
    </script>
     <div class="introUserPage">
    <h3>Olá {{name}} por favor, informe o treino feito hoje</h3>
  
    </div>
    <div class="backgroundDiv">
    <div class="generalUserPage">
   
 

    <p  id="isAdmin" style="visibility: hidden;">{{admin}}</p>

    <br>
    
    {{#if message}}
        <h4 class="failMsgPlan"> {{message}}</h4>
    {{/if}}
    {{#if message2}}
        <h4 class="successMsgPlan"> {{message2}}</h4>
    {{/if}}
    
   <form name="formid"  class="formUserPage" method="POST" action="/auth/userPage">
   <select id="weekDay" name="weekDay" onchange="display()" class="weekDay">
                 <option value="menu">Treino de hoje</option>
                 <option  id="weekDayOptions" value="{{exercisesSegunda}}">Segunda-feira</option>
                 <option  id="weekDayOptions" value="{{exercisesTerca}}">Terca-feira</option>
                 <option  id="weekDayOptions" value="{{exercisesQuarta}}">Quarta-feira</option>
                 <option  id="weekDayOptions" value="{{exercisesQuinta}}">Quinta-feira</option>
                 <option  id="weekDayOptions" value="{{exercisesSexta}}">Sexta-feira</option>
                 <option  id="weekDayOptions" value="{{exercisesSabado}}">Sabado</option>
                 <option  id="weekDayOptions" value="{{exercisesDomingo}}">Domingo</option>
                 

    </select>
    <br>
    
    <input type="hidden" value="{{name}}" name="email">
    <input type="date" id="dateOfTrain" name="dateOfTrain" required style="visibility: hidden;">
  
    
      <input type="hidden" id="diaSelecionado" name="diaSelecionado">
       
            <div id="holder"></div>
          <div id="demo"></div>
          <br>

             <br>
          <label id="lblmess"></label>
          
           
             <input type="submit" value="Pronto" class="selectWeekDay" id="buttonSubmit" style="visibility: hidden;" onclick="somarPesos()"> 
       
    <p style="visibility: hidden;" id="imagesSegundaArray">{{imagesSegunda}}</p>
    <p  style="visibility: hidden;" id="imagesTercaArray">{{imagesTerca}}</p>
    <p style="visibility: hidden;" id="imagesQuartaArray">{{imagesQuarta}}</p>
    <p style="visibility: hidden;" id="imagesQuintaArray">{{imagesQuinta}}</p>
    <p style="visibility: hidden;" id="imagesSextaArray">{{imagesSexta}}</p>
    <p style="visibility: hidden;" id="imagesSabadoArray">{{imagesSabado}}</p>
    <p style="visibility: hidden;" id="imagesDomingoArray">{{imagesDomingo}}</p>

    <p style="visibility: hidden;"id="seriesSegundaArray">{{seriesSegunda}}</p>
    <p style="visibility: hidden;" id="seriesTercaArray">{{seriesTerca}}</p>
    <p style="visibility: hidden;" id="seriesQuartaArray">{{seriesQuarta}}</p>
    <p style="visibility: hidden;" id="seriesQuintaArray">{{seriesQuinta}}</p>
    <p style="visibility: hidden;" id="seriesSextaArray">{{seriesSexta}}</p>
    <p style="visibility: hidden;" id="seriesSabadoArray">{{seriesSabado}}</p>
    <p style="visibility: hidden;" id="seriesDomingoArray">{{seriesDomingo}}</p>

    <p  style="visibility: hidden;" id="resultadosTotaisPeso">{{resultadosTotaisPeso}}</p>
    <p  style="visibility: hidden;" id="resultadosTotaisRepeticoes">{{resultadosTotaisRepeticoes}}</p>
    <p   style="visibility: hidden;" id="resultadosTotaisSeries">{{resultadosTotaisSeries}}</p>
    <p  style="visibility: hidden;" id="resultadosTotaisDias">{{resultadosTotaisDias}}</p>
    

    <br>
  
  


     <div class ="adminLogout"></div>
   </form>
   
    </div>
    </div>
    
    
    <script>
        ///IMPRINMINDO IMAGEM USANDO JAVASCRIPT
        /*
        valueOfSegunda =document.getElementById("imagesSegundaArray").innerHTML;
        valueOfSegunda= valueOfSegunda.split(",")
        
        img = document.getElementById("imgOfSegunda")
        img.src=valueOfSegunda[0]
        */

        function display(){
            
            

            //LIMPANDO O AVISO
             document.getElementById('lblmess').innerHTML = ""


            dia = formid.weekDay.selectedIndex
            document.getElementById('diaSelecionado').value = dia
            
            valorSelecionado = formid.weekDay[formid.weekDay.selectedIndex].value
         
            var splitsOriginal = valorSelecionado.split(',');
            splits = splitsOriginal.filter((value,index,arr)=>arr.indexOf(value)==index);
            var indexesNoArrayOriginal
            var arrayOfIndexes = []
            for(i=0;i<splits.length;i++){
                index = splitsOriginal.indexOf(splits[i])
                arrayOfIndexes.push(index)
            }
            

            var holder = document.getElementById("holder");
         

            a= document.getElementById('holder')
     
            if(a.firstChild){
                
                a.innerHTML=''
                
            }
            ///EU TENHO ALGO DENTRO DO MEU ARRAY?
            if(splits.length>1 || valorSelecionado!="" && valorSelecionado!="menu"){
           
            
         

            for(z=0;z<splits.length;z++){
   
         
           
            c= document.createElement('p')
            c.setAttribute("id","p1")
            node = document.createTextNode(splits[z])
            c.appendChild(node)
            holder.appendChild(c)
            

       






           


            if(dia==1){ imgValue =document.getElementById("imagesSegundaArray").innerHTML; seriesDoDia = document.getElementById("seriesSegundaArray").innerHTML}
            if(dia==2){ imgValue =document.getElementById("imagesTercaArray").innerHTML;seriesDoDia = document.getElementById("seriesTercaArray").innerHTML}
            if(dia==3){ imgValue =document.getElementById("imagesQuartaArray").innerHTML;seriesDoDia = document.getElementById("seriesQuartaArray").innerHTML}
            if(dia==4){ imgValue =document.getElementById("imagesQuintaArray").innerHTML;seriesDoDia = document.getElementById("seriesQuintaArray").innerHTML}
            if(dia==5){ imgValue =document.getElementById("imagesSextaArray").innerHTML;seriesDoDia = document.getElementById("seriesSextaArray").innerHTML}
            if(dia==6){ imgValue =document.getElementById("imagesSabadoArray").innerHTML;seriesDoDia = document.getElementById("seriesSabadoArray").innerHTML}
            if(dia==7){ imgValue =document.getElementById("imagesDomingoArray").innerHTML;seriesDoDia = document.getElementById("seriesDomingoArray").innerHTML}


            
            seriesDoDia = seriesDoDia.split(",")
            seriesDoDiaFormated = []
          
            for(i=0;i<arrayOfIndexes.length;i++ ){
                index = arrayOfIndexes[i]
                seriesDoDiaFormated.push(seriesDoDia[index])
            }  
            console.log(seriesDoDiaFormated)
            
          
            for(i=0;i<seriesDoDiaFormated[z];i++){
                newParagraph = document.createElement('p')
                 node = document.createTextNode("Peso na Série: "+(i+1))
                newParagraph.appendChild(node)
                a.appendChild(newParagraph)
                valoresDasSeries= document.createElement('input')
                valoresDasSeries.setAttribute("type","number");
                valoresDasSeries.step = 0.1;
                valoresDasSeries.min = 0;
                valoresDasSeries.setAttribute("id","valoresDasSeries"+z)
                valoresDasSeries.name = "valoresDasSeries" + z;
                valoresDasSeries.required = true;
                a.appendChild(valoresDasSeries)
                newParagraph = document.createElement('p')
                node = document.createTextNode("Repetições na série: " + (i+1))
                newParagraph.appendChild(node)
                a.appendChild(newParagraph)
                repeticoes = document.createElement('input')
                repeticoes.setAttribute("type","number");
                repeticoes.step = 0.1;
                repeticoes.min = 0;
                repeticoes.setAttribute("id","repeticoes"+z)
                repeticoes.name = "repeticoes" + z;
                repeticoes.required = true;
                a.appendChild(repeticoes)

                
            }
            

            




           
            imgValue= imgValue.split(",")



            const images = ["jpg", "gif", "png"]
            const videos = ["mp4", "m4v", "ogg"]

            
            const extension = imgValue[z].split(".")[imgValue[z].split(".").length - 1]

            if (images.includes(extension)) {
            console.log("imagem")
            img = document.createElement("img")
            img.src=imgValue[z]
            img.id="imagemExercicios"
            a.appendChild(img)
            } else if (videos.includes(extension)) {
            console.log("video")
            video = document.createElement('video');
            video.src = imgValue[z];
            video.id="videosExercicios"
            video.controls = true
            a.appendChild(video)
            }
            
            

            b= document.createElement('input')
            b.setAttribute("type","number");
            b.step = 0.1;
            b.min = 0;
            b.name = "peso"
            
            b.setAttribute("id","t1"+z)
            b.required = true;

            q= document.createElement('input')
            q.setAttribute("type","number");
            q.step = 0.1;
            q.min = 0;
            q.name = "repeticoesTotais";
            
            q.setAttribute("id","repeticoesTotais"+z)
            q.required = true;





            document.getElementById("t1"+z).style.visibility = 'hidden'
            document.getElementById("repeticoesTotais"+z).style.visibility = 'hidden'

            document.getElementById('buttonSubmit').style.visibility = 'visible';
            document.getElementById('dateOfTrain').style.visibility='visible'
            }
            }
                
            ///CASO O ITEM SELECIONADO SEJA O PRIMEIRO
            else if(valorSelecionado=="menu"){
                document.getElementById('lblmess').innerHTML = "Faça a seleção do seu treino"
                document.getElementById('buttonSubmit').style.visibility = 'hidden';
                document.getElementById('dateOfTrain').style.visibility='hidden'

            }
            ///CASO NÃO POSSUA TREINOS
            else{
                document.getElementById('lblmess').innerHTML = "Você não possui treinos para " + formid.weekDay[formid.weekDay.selectedIndex].text
                document.getElementById('buttonSubmit').style.visibility = 'hidden';
                document.getElementById('dateOfTrain').style.visibility='hidden'
            }

        

        }



        isAdmin =document.getElementById('isAdmin').innerHTML
        if(isAdmin==1){
            width =$(window).width();
          
           if(width>1420){document.getElementById('adminPage').style.visibility = 'visible'}
          
           if(width>1420) {document.getElementById('registerPage').style.visibility = 'visible'}
         

            var button = document.createElement("button");
            button.innerHTML = "Admin Logout";

            var body = document.getElementsByClassName("adminLogout")[0]
            body.appendChild(button);


            button.onclick = function(){
                    var cookieValue =  localStorage.getItem('adminUser');
                    
                    document.cookie = "adminUser=" + cookieValue + ";expires="+new Date(2018,12,25).toUTCString();
                    window.location.replace("/adminCheck");
                    adminIsLogged=false
            };


         
        }else{
            
        }


        function somarPesos(){
            
              for(z=0;z<splits.length;z++){
            var total=0;
            values = document.getElementsByName("valoresDasSeries"+z)
            values.forEach((valoresDasSeries)=>{
            valueToFloat = parseFloat(valoresDasSeries.value)
            total = total+valueToFloat
            
            })
            document.getElementById("t1"+z).value  = total/seriesDoDiaFormated[z]
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            var totalRepeticoes = 0
            repeticoesTotais = document.getElementsByName("repeticoes"+z)
            repeticoesTotais.forEach((valorRepeticoes)=>{
            repeticoesToFloat = parseFloat(valorRepeticoes.value)
            console.log(valorRepeticoes.value)
            totalRepeticoes = totalRepeticoes + repeticoesToFloat;
            })
            document.getElementById("repeticoesTotais"+z).value = totalRepeticoes/seriesDoDiaFormated[z]
             }
        }
       

    </script>
    









    
    <!------------------------------------- FOOTER ----------------------------------------------------------------------->
    <a href="https://api.whatsapp.com/send?phone=554791411387&text=Olá%21%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20saber%20mais%20à%20respeito%20do%20personal." class="float" target="_blank">
        <i class="fa fa-whatsapp my-float"></i>
        </a>


        <div class="footer__container">
            <div class="footer__links">
                <div class="footer__link--wrapper">
                    
                    <div class="footer__link--items">
                      
                        <a href="/" id="footer__logo">Pavanello Personal Trainer</a>
                        <p class="website__rights">© Pavanello Personal. Todos os direitos reservados.</p>
                        <div class="social__icons">
                                     <a href="https://www.instagram.com/pavanello.personal/" class="social__icon--link" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.facebook.com/andrei.pavanello" class="social__icon--link" target="_blank"><i class="fab fa-facebook"></i></a>
                           <a href="/contacts" class="social__icon--link" target="_blank"><i class="fab fa-google"></i></a>
                            
                        </div>
                        
                    </div>
                </div>
    
           
    
        </div>



   
    <!----------------------------------- MOBILE ------------------------------------------------------>
 <div class ="toggle" ></div>
    <div class ="overlay"></div>
    <div class = "menuMobile">
        <ul id="ulMenuMobile">
            <li><a href="/">Home</a></li>
            <li><a href="/userStats">Progresso</a></li>
            <li><a href="/login" onclick="cookieDelete(),cookieDeleteAdmin()">Logout</a></li>
           
           
        </ul>
    </div>
    <script>
        if(isAdmin==1){
            





            ul =document.getElementById("ulMenuMobile")
            li=document.createElement("li")
            li.setAttribute("id","liId")
            a = document.createElement("a")
            a.value="Admin"
            a.href = "/adminCheck"
            a.appendChild(document.createTextNode(a.value))
            li.appendChild((a));
            ul.appendChild(li)

            
            ul =document.getElementById("ulMenuMobile")
            li=document.createElement("li")
            li.setAttribute("id","liId")
            a = document.createElement("a")
            a.value="Registrar"
            a.href = "/register"
            a.appendChild(document.createTextNode(a.value))
            li.appendChild((a));
            ul.appendChild(li)







      











        }
    </script>

    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script type="text/javascript">
    var a=0
        $(document).ready(function(){
            $('.toggle').click(function(){
                $('.toggle').toggleClass('active')
                $('.overlay').toggleClass('active')
                $('.menuMobile').toggleClass('active')
                a++;
               
                    

            }
            )
        })


    
    </script>
    <script>
            function cookieDeleteAdmin(){
                                   

                    var cookieValue =  localStorage.getItem('adminUserEmail');
                    
                    document.cookie = "adminUser=" + cookieValue + ";expires="+new Date(2018,12,25).toUTCString();
        }
    </script>
  
    <script src="../app.js"></script>
    <script src="https://smtpjs.com/v3/smtp.js"></script>

        




</body>


</html>




