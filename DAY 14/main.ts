       //DAY 14 CHALLENGE;
 
//Question 40: Album: Create objects for music albums.
function make_album(artist: string, title: string, tracks?: number){
    let album = {artist,title};
    if (tracks){album[`tracks`] = tracks;
}
      return album ;
}
console.log(make_album("artist one", "the fisrt album"));
console.log(make_album("artist two", "the second album"));
console.log(make_album("artist three", "the third album", 12));

//Question 41: Magicians: Display magician names from an array.

let magicians: string[] = ["Alice","David","Chris"];

function show_magicians(Magicians: string[]){
    magicians.forEach(magician =>{
        console.log(magician);
        })
}
show_magicians(magicians);

// Question 42: Great Magicians: Add "the Great" to magician names.

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

make_great(magicians); 
show_magicians(magicians);



