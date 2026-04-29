function copy(el){
navigator.clipboard.writeText(el.outerHTML);
el.innerText="Copied";
setTimeout(()=>{el.innerText="Button"},1000);
}