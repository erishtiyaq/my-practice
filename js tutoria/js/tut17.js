console.log('this is my seven teenth cahapter')
document.getElementById('heading').addEventListener('click',function(e){
    let variable;
    console.log('you have clicked the heading');
    variable = e.target;
    variable = e.offsetX;
    // offset is used to how much far we have clicked from x axis similary is offsetY and also we have client x and client y which is how far we have clikced from the browser.
    console.log(e);
    console.log(variable)
});