function hisobla(ovqatnomi,ovqatnarxi){
const nechta=+prompt(ovqatnomi+" dan nechta zakaz qimoqchisiz ")
const javob=confirm(nechta+" ta "  +ovqatnomi+(nechta*ovqatnarxi)+" som boladi zakaz berasmi ");
if(javob==true){
    alert("zakaz qabul qilindi")
}else{
    alert("zakaz bekor qilindi")
}
}