const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");
const themeBtn=document.getElementById("themeBtn");

if(menuBtn && navLinks){
  menuBtn.addEventListener("click",()=>navLinks.classList.toggle("open"));
}
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

const savedTheme=localStorage.getItem("portfolio-theme");
if(savedTheme==="dark" && themeBtn){
  document.body.classList.add("dark");
  themeBtn.textContent="☀";
}
if(themeBtn){
  themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    const dark=document.body.classList.contains("dark");
    localStorage.setItem("portfolio-theme",dark?"dark":"light");
    themeBtn.textContent=dark?"☀":"☾";
  });
}

const form=document.getElementById("contactForm");
const status=document.getElementById("formStatus");
if(form){
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const subject=document.getElementById("subject").value.trim();
    const message=document.getElementById("message").value.trim();

    if(name.length<2 || !email || !subject || message.length<10){
      if(status) status.textContent="Please complete all fields. Message must be at least 10 characters.";
      return;
    }
    const recipient="kesavaraja625@gmail.com";
    const body=`Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto=`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if(status) status.textContent="Opening your email app to send this message...";
    window.location.href=mailto;
  });
}
