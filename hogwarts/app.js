if (typeof jQuery == 'undefined'){
    console.log('oops! I Still have to link my jQuery properly!');
}
else{
    console.log('I did it! I linked jQuery and this js file!')
}
// console.log("Homework 5 - Hogwarts!")
//Commit 0 - All my files are linked and loaded!

    const $container = $('#container');
    const $h1 = $('<h1>').text('Hogwarts');  
    // const $h1 = $('<h1>').text('Trois couleurs: rouge, blanc, et blue') 
    // $div1.append($h1);
$(() => {

    $(container).append($h1);
    console.log($container);
});
//Commit 1 - I added my first element and it was fun