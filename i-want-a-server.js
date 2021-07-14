// Add common header - just to be fancy.
document.addEventListener('DOMContentLoaded', ()=>{
    // add H1 using content form doc title
    let header1 = document.createElement("H1");
    header1.textContent = document.title ? document.title : "Update document title";
    document.body.prepend(header1);

    let footer = document.createElement("FOOTER");
    footer.textContent = "© 2021 Lane Webstuff - all rights reserved.";
    document.body.append(footer);
    
    let thisPageName = window.location.pathname.split("/").pop();
    console.log(thisPageName);

    function makeMenuItem(text,href){
        let navItem = document.createElement("LI");
        if (href !== thisPageName) {
            let navLink = document.createElement("A");
            navLink.href=href;
            navLink.textContent = text;
            navItem.appendChild(navLink);
        } else {
            navItem.innerText = text;
            navItem.classList.add("current");
        }
        return navItem;
    }


    let navList = document.createElement("UL");
    navList.appendChild( makeMenuItem("Home","index.html") );
    navList.appendChild( makeMenuItem("A List","page1.html") );
    navList.appendChild( makeMenuItem("3 Images","page2.html") );
    navList.appendChild( makeMenuItem("A Table","page3.html") );
    navList.appendChild( makeMenuItem("A Form","page4.html") );

    let navArea = document.querySelector("nav");
    navArea.append(navList);

  } );