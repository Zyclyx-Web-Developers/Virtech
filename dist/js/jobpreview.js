!function(){let e=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"],t=new URLSearchParams(window.location.search).get("id"),n=document.getElementById("responsibilities"),o=document.getElementById("jobtitle"),i=document.getElementById("description"),l=document.getElementById("qualifications"),a=document.getElementById("location"),s=document.getElementById("startDate"),d=document.getElementById("closeDate"),c=document.getElementById("jobtype");fetch(`https://agile-plateau-09650.herokuapp.com/jobopenings/${t}`).then(function(e){return e.json()}).then(function(t){console.log(t);let m="";if(t.requirements)for(let e in t.requirements)m+=`<li>\n    <span><i class="fa fa-check rounded-circle p-1"></i></span>\n    <p>${t.requirements[e]}</p>\n    </li>`;l.innerHTML=m,i.textContent=t.description,o.textContent=t.title;let r="";if(t.requirements)for(let e in t.requirements)r+=`<li>\n    <span><i class="fa fa-check rounded-circle p-1"></i></span>\n    <p>${t.requirements[e]}</p>\n  </li>`;n.innerHTML=r,a.textContent=t.location;let u=new Date(t.createdAt),p=`${u.getDate()} ${e[u.getMonth()]} ${u.getFullYear()}`,g=new Date(t.lastdate),y=`${g.getDate()} ${e[g.getMonth()]} ${g.getFullYear()}`;s.textContent=p,d.textContent=y,c.textContent=t.jobtype});let m=document.getElementById("jobApplication");m.addEventListener("submit",function(e){if(e.preventDefault(),m.classList.add("was-validated"),document.getElementById("submitApplicationButton").setAttribute("disabled",!0),document.getElementById("btnText").style.display="none",document.getElementById("btnSpinner").style.display="block",jobApplication.checkValidity()||(document.getElementById("submitApplicationButton").removeAttribute("disabled"),document.getElementById("btnText").style.display="block",document.getElementById("btnSpinner").style.display="none"),m.checkValidity()){let e=new FormData(m),t={firstname:e.get("firstname"),lastname:e.get("lastname"),email:e.get("email"),phone:e.get("phone"),message:e.get("message"),resume:e.get("resume"),position:jobTitle};fetch("https://agile-plateau-09650.herokuapp.com/jobapplications",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then(function(e){return document.getElementById("submitApplicationButton").setAttribute("disabled",!0),document.getElementById("btnText").style.display="none",document.getElementById("btnSpinner").style.display="block",e.json()}).then(function(e){console.log(e),$("#JobApplicationModal").modal("show")}).catch(function(e){document.getElementById("errorAlert").textContent="Something went wrong! Please try again"})}},!1)}();