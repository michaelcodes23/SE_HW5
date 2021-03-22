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
    const $table = $('<table>');
    const $spr = $('<h5>').text('Spring 2024');
    const $thead =  $('<thead>');
    const $day = $('<th>').text('Day');
    const $class = $('<th>').text('Classes');
    const $tr1 = $('<tr>');
    const $tr2 = $('<tr>');
    const $tr3 = $('<tr>');
    const $tr4 = $('<tr>');
    const $tr5 = $('<tr>');
    const $mon= $('<td>').text('Monday');
    const $classDay1 = $('<td>').text('Divination, Charms, Potions');
    const $tues= $('<td>').text('Tuesday');
    const $wed= $('<td>').text('Wednesday');
    const $thurs= $('<td>').text('Thursday');
    const $fri= $('<td>').text('Friday');
    const $classDay2 = $('<td>').text('Transfiguration, Defense Against the Dark Arts');
    const $classDay3 = $('<td>').text('Herbology, History of Magic');
    const $classDay4 = $('<td>').text('Quidditch Practice, Natural Science');
    const $classDay5 = $('<td>').text('Magical Creatures, Dueling');

// "Commit 4 - I realize I can make things that are ever increasingly more 
// complex with greater ease. Adding order is always more effort than causing chaos"

$(() => {
    $(container).append($h1);
    $(container).append($name);
    $(container).append($house);
    $(container).append($pet);
    $(container).append($wand);
    $(container).append($storage);
    $storage.append($beer, $cloak, $map, $turner, $leash, $beans);
    $(container).append($spr);
    $(container).append($table);
    $table.append($thead);
    $thead.append($day, $class);
    $table.append($tr1,$tr2,$tr3,$tr4,$tr5);
    $tr1.append($mon,$classDay1);
    // console.log($container);
    $tr2.append($tues,$classDay2);
    $tr3.append($wed,$classDay3);
    $tr4.append($thurs,$classDay4);
    $tr5.append($fri,$classDay5);
    $wand.remove();
    $beer.remove();
    $(container).append($wand)
    $wand.text("This is my really cool wand made of oak and dragon claw");
    $wand.css('color','indigo')
    $pet.remove();
    // $('body').append($pet);
    $(container).append($pet);
    $house.after($pet);
    //"Commit 5 - The days go by slowly and the years go by too fast"
});
