const posts = [
    {
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
      id: 6,
      title: "dolorem eum magni eos aperiam quia",
      body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
      id: 7,
      title: "magnam facilis autem",
      body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
      id: 8,
      title: "dolorem dolore est ipsam",
      body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
      id: 9,
      title: "nesciunt iure omnis dolorem tempora et accusantium",
      body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
      id: 10,
      title: "optio molestias id quia eum",
      body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    },
    {
      id: 11,
      title: "et ea vero quia laudantium autem",
      body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    },
    {
      id: 12,
      title: "in quibusdam tempore odit est dolorem",
      body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
    },
    {
      id: 13,
      title: "dolorum ut in voluptas mollitia et saepe quo animi",
      body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
    },
    {
      id: 14,
      title: "voluptatem eligendi optio",
      body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
    },
    {
      id: 15,
      title: "eveniet quod temporibus",
      body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
    },
    {
      id: 16,
      title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
      body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
    },
    {
      id: 17,
      title: "fugit voluptas sed molestias voluptatem provident",
      body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
    },
    {
      id: 18,
      title: "voluptate et itaque vero tempora molestiae",
      body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
    },
    {
      id: 19,
      title: "adipisci placeat illum aut reiciendis qui",
      body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
    },
    {
      id: 20,
      title: "doloribus ad provident suscipit at",
      body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
    },
    {
      id: 21,
      title: "asperiores ea ipsam voluptatibus modi minima quia sint",
      body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
    },
    {
      id: 22,
      title: "dolor sint quo a velit explicabo quia nam",
      body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
    },
    {
      id: 23,
      title: "maxime id vitae nihil numquam",
      body: "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
    },
    {
      id: 24,
      title: "autem hic labore sunt dolores incidunt",
      body: "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt"
    },
    {
      id: 25,
      title: "rem alias distinctio quo quis",
      body: "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
    }
  ]
  
  console.log(posts)
  
//   console.log(posts[0])
//   console.log(posts[0].body)
//   console.log(posts[0].title)
  
//   console.log(posts[1])
//   console.log(posts[1].body)
//   console.log(posts[1].title)
  
//   console.log(posts[2])
//   console.log(posts[2].body)
//   console.log(posts[2].title)
  
//   posts.forEach(post => {
//     console.log(post)
//     console.log(post.title)
//     console.log(post.body)
//   })
  
//   console.log(posts.slice(5, 8))


//   7. Naudojant posts masyvą, atlikti žemiau nurodytas užduotis ir atsakymus išvesti į konsolę. Visoms užduotis kurti funkciją ir jai, kaip parametrą, paduoti nurodytą masyvą.

//  7.1. Gauti pirmo masyvo nario reikšmę.

function task71(data) {
    if (data.length > 0) {
        return data[0]
    } else {
        return 'There is no this element in array'
    }
}
  
  console.log(task71(posts))

//  7.2. Gauti paskutinio masyvo nario reikšmę.

function task72(data) {
    if (data.length > 0) {
        return data[data.length - 1]
    } else {
        return 'There is no this element in array'
    }
}

console.log(task72(posts))

// 7.3. Gauti 15 masyvo nario reikšmę.

function task73(data) {
    if (data.length > 0) {
        return data[14]
    } else {
        return 'There is no this element in array'
    }
}

console.log(task73(posts))


// 7.4. Gauti 13 masyvo nario reikšmę skaičiuojant nuo galo.

function task74(data) {
    if (data.length > 0) {
        return data[data.length - 13]
    } else {
        return 'There is no this element in array'
    }
}

console.log(task74(posts))


// 7.5. Gauti vidurinio masyvo nario reikšmę.

function task75(data) {
    if (data.length > 0) {
        let middle = Math.floor(data.length / 2)
        return data[middle]
    } else {
        return 'There is no this element in array'
    }
}

console.log(task75(posts))

// 7.6. Gauti pirmų keturių masyvo narių reikšmes.

function task76(data) {
    if (data.length > 0) {
        return data.slice(0, 4)
    } else {
        return 'There is no this element in array'
    }
}

console.log(task76(posts))

// 7.7. Gauti paskutinių penkių masyvo narių reikšmes.

function task77(data) {
    if (data.length > 0) {
        return data.slice(-5)
    } else {
        return 'There is no this element in array'
    }
}

console.log(task77(posts))


// 7.8. Gauti nuo penkto iki penkiolikto masyvo narių reikšmes.

function task78(data) {
    if (data.length > 0) {
        return data.slice(4, 15)
    } else {
        return 'There is no this element in array'
    }
}

console.log(task78(posts))

// 7.9. Gauti kas antro masyvo nario reikšmes.

function task79(data) {

    if (data.length > 0) {
        for (let i = 0; i < data.length; i += 2) {
        console.log(data[i])
        }
    } else {
        return 'There is no this element in array'
    }
}
task79(posts)

// 7.10. Gauti pirmo ir paskutinio masyvo narių reikšmes.

function task710(data) {
   console.log(task71(data))
   console.log(task72(data))
}

task710(posts)

// 7.11. Gauti pirmą masyvo narį ir į konsolę išvesti jo property "title" reikšmę.

function task711(data) {
    if (data.length > 0) {
      return `Title: ${data[0].title}`
    } else {
      return 'There is no this element in array'
    }
  }
  console.log(task711(posts))


// 7.12. Gauti antrą masyvo narį ir į konsolę išvesti jo property "body" reikšmę.

function task712(data) {
    if (data.length > 0) {
      return `Body: ${data[1].body}`
    } else {
      return 'There is no this element in array'
    }
  }
  console.log(task712(posts))

// 7.13. Gauti trečią masyvo narį ir į konsolę išvesti jo property "title" ir "body" reikšmes tokiu formatu: Post title is: 'post title' and the content is: 'post content'.
function task713(data) {
    if (data.length > 0) {
      return `Post title is: ${data[2].title} and the content is: ${data[2].body}`
    } else {
      return 'There is no this element in array'
    }
  }
  console.log(task713(posts))

// 7.14. Išvesti visus masyvo narius į konsolę.

function task714(data) {
    if (data.length > 0) {
        data.map((post) => {
        console.log(post)
    }) 
    } else {
        console.log('There is no this element in array')
    }
}
task714(posts)

// 7.15. Išvesti visų masyvo narių property "title" į konsolę.
function task715(data) {
    if (data.length > 0) {
        data.map((post) => {
        console.log(post.title)
    }) 
    } else {
        console.log('There is no this element in array')
    }
}
task715(posts)

// 7.16. Išvesti visų masyvo narių property "body" į konsolę.
function task716(data) {
    if (data.length > 0) {
        data.map((post) => {
        console.log(post.body)
    }) 
    } else {
        console.log('There is no this element in array')
    }
}
task716(posts)

// 7.17. Išvesti visų masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
function task717(data) {
    if (data.length > 0) {
        data.map((post) => {
        let output = `Title: ${post.title}. Content: ${post.body}.`
        console.log(output)
    }) 
    } else {
        console.log('There is no this element in array')
    }
}
task717(posts)

// 7.18. Išvesti pirmų keturių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
function task718(data) {
    if (data.length > 0) {
        let firstFourElements = task76(data)
        firstFourElements.map((post) => {
        let output = `Title: ${post.title}. Content: ${post.body}.`
        console.log(output)
    }) 
    } else {
        console.log('There is no this element in array')
    }
}
task718(posts)


// 7.19. Išvesti paskutinių septynių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".

function task719(data) {
    if (data.length > 0) {
        let lastSevenElements = data.slice(-7)
        lastSevenElements.map((post) => {
        let output = `Title: ${post.title}. Content: ${post.body}.`
        console.log(output)
    }) 
    } else {
        console.log('There is no this element in array')
    }
}
task719(posts)


// 7.20. HTML faile sukurti ul elementą ir kiekvieną masyvo nario property "title" reikšmę, kaip li elementą, išvesti į ul elementą.

function task720(data) {
    let ulElement720 = document.querySelector('#task-720')

    for(let i = 0; i < posts.length; i++){
        let li = document.createElement('li')
        li.textContent = posts[i].title
        ulElement720.append(li)
    }
}
// task720()


// 7.21. HTML faile sukurti ul elementą ir kiekvieną masyvo nario property "title" ir "body" išvesti tokiu formatu: Title: "post title". Content: "post content".

function task721(data) {
    let ulElement721 = document.querySelector('#task-721')

    for (let i = 0; i < posts.length; i++) {
        let li = document.createElement('li')
        li.textContent = `Title: ${posts[i].title}. Content: ${posts[i].body}.`
        ulElement721.append(li)
    }
}
// task721()

// 7.22. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas prasideda raide "s".

function task722(data) {
    let ulElement722 = document.querySelector('#task-722')

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].title.startsWith('s')){
            let li = document.createElement('li')
            li.textContent = `Title: ${posts[i].title}. Content: ${posts[i].body}.`
            ulElement722.append(li)
        }  
    }
}
// task722()

// 7.23. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas baigiasi "t" arba "m".

function task723(data) {
    let ulElement723 = document.querySelector('#task-723')

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].title.endsWith('t') || posts[i].title.endsWith('m')){
            let li = document.createElement('li')
            li.textContent = `Title: ${posts[i].title}.`
            ulElement723.append(li)
        }  
    }
}
// task723()

// 7.24. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi daugiau simbolių nei 15.

function task724(data) {
    let ulElement724 = document.querySelector('#task-724')

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].title.length > 15) {
            let li = document.createElement('li')
            li.textContent = `Title: ${posts[i].title}.`
            ulElement724.append(li)
        }  
    }
}
// task724()

// 7.25. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi mažiau simbolių nei 20 ir kurių "body" turi daugiau simbolių nei 50.

function task725(data) {
    let ulElement725 = document.querySelector('#task-725')

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].title.length < 20 && posts[i].body.length > 50) {
            let li = document.createElement('li')
            li.textContent = `Title: ${posts[i].title}. Content: ${posts[i].body}.`
            ulElement725.append(li)
        }  
    }
}
// task725()

// 7.26. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi tarp 20 ir 30 simbolių ir kurių "body" turi tarp 70 ir 130 simbolių.

function task726(data) {
    let ulElement726 = document.querySelector('#task-726')

    for (let i = 0; i < posts.length; i++) {
        // if (posts[i].title.length > 20 && posts[i].title.length < 30 && posts[i].body.length > 70 && posts[i].body.length < 130) {
        if (posts[i].title.length > 20 < 30 && posts[i].body.length > 70 < 130) {
            let li = document.createElement('li')
            li.textContent = `Title: ${posts[i].title}. Content: ${posts[i].body}.`
            ulElement726.append(li)
        }  
    }
}
// task726()

// 7.27. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi simbolių junginį "it", o "body" turi simbolių junginį "quo".

function task727(data) {
    let ulElement727 = document.querySelector('#task-727')

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].title.includes('it') && posts[i].body.includes('quo')) {
            let li = document.createElement('li')
            li.textContent = `Title: ${posts[i].title}. Content: ${posts[i].body}.`
            ulElement727.append(li)
        }  
    }
}
// task727()

// 7.28. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių "body" turi žodį "sit". Jeigu žodis turi šį simbolių junginį, tačiau tai nėra pilna jo reikšmė (pvz. žodžiai "sitto" ar "quasit"), jie neturėtų būti atvaizduojami.

function task728(data) {
    let ulElement728 = document.querySelector('#task-728')

    for (let i = 0; i < posts.length; i++) {
        let contentWords = posts[i].body.split(' ')
        if (contentWords.includes('sit')) {
            let li = document.createElement('li')
            li.textContent = `Content: ${posts[i].body}.`
            ulElement728.append(li)
        }  
    }
}
// task728()


// 7.29. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi daugiau nei 3 "a" raides, o "body" turi mažiau nei 7 "o" raides.

function task729(data) {
    let ulElement729 = document.querySelector('#task-729')

    for (let i = 0; i < posts.length; i++) {

        let titleWords = posts[i].title.split('')
        let contentWords = posts[i].body.split('')
        
        let matchTitleWords = titleWords.filter(letter => letter === 'a');
        let matchContentWords = contentWords.filter(letter => letter === 'o');

        if (matchTitleWords.length > 3 && matchContentWords.lenght < 7) {
            let li = document.createElement('li')
            li.textContent = `Title: ${posts[i].title}. Content: ${posts[i].body}.`
            ulElement729.append(li)
        }  
    }
}
// task729()




// 7.30. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti visų masyvo narių pavadinimus surūšiuotus nuo mažiausiai iki daugiausiai raidžių "body" property turinčių narių. Papildomai, prie išvesto teksto pridėti ir "body" raidžių skaičių.
function task730(){
    let ul = document.querySelector('ul')

    posts.sort(function(a, b) {
      return a.body.length - b.body.length
    })

    for(let i = 0; i < posts.length; i++){
        let title = posts[i].title
        let body = posts[i].body

          let li = document.createElement('li')
          li.textContent = `Title: "${title}". Content: "${body}".`
          ul.append(li)
    }
  }
  task730()