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
    const $name = $('<h2>').text('Michael')
//Commit 1 - I added my first element and it was fun
    const $house = $('<h3>').text('Gryffindor');
    const $pet = $('<h4>').attr('class','dog').text('Jackie');
    const $wand= $('<h4>').text('Birch Wand with Phoenix Feather Core');
//Commit 2 - I added more elements. My power grows with my dedication and hard work
    const $storage = $('<ul>').attr('storage','trunk');
    const $beer = $('<li>').text('butter beer');
    const $cloak = $('<li>').text('invisibility cloak').attr('class','secret');
    const $map = $('<li>').text('magic map').attr('class','secret');
    const $turner = $('<li>').text('time turner').attr('class','secret');
    const $leash = $('<li>').text('leash').attr('class','dog');
    const $beans = $('<li>').text('Bertie Botts Ever Flavor[Jelly] Beans');


$(() => {

    $(container).append($h1);
    $(container).append($name);
    $(container).append($house);
    $(container).append($pet);
    $(container).append($wand);
    $(container).append($storage);
    $storage.append($beer, $cloak, $map, $turner, $leash, $beans);
    console.log($container);
});
