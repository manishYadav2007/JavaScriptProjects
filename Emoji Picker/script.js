
document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById('search-input');
    const emojiGrid = document.getElementById('emoji-grid');
    const selectedEmoji = document.getElementById('selected-emoji');
    const copyBtn = document.getElementById('copy-btn');


    let allEmojis = []
    const apiUrl = "https://emojihub.yurace.pro/api/all";



    let decodeHtml = (html) => {
        const textArea = document.createElement("textarea");
        textArea.innerHTML = html;
        return textArea.value;
    }




    let displayEmojies = (emojies) => {
        emojiGrid.innerHTML = '';
        emojies.forEach(emoji => {
            let {character} = emoji; 
            let createEmojiSpanElement = document.createElement("span"); 
            createEmojiSpanElement.classList.add("emoji-item");
            createEmojiSpanElement.innerHTML = character; 


            createEmojiSpanElement.addEventListener('click', () => {
                selectedEmoji.innerHTML = character; 
            })

            emojiGrid.appendChild(createEmojiSpanElement); 


        }) 
    }



    let fetchEmojis = async () => {

        try {
            const requestData = await fetch(apiUrl);
            console.log(requestData);
            
            if (!requestData.ok) {
                throw new Error("Failed to fetch emojis");
            }

            const data = await requestData.json();
            console.log(data);
            
            allEmojis = data.map(eachEmoji => ({
                character: decodeHtml(eachEmoji.htmlCode[0]),
                name: eachEmoji.name.toLowerCase()
            }))
            displayEmojies(allEmojis); 
        }
        catch (error) {
            emojiGrid.innerHTML = `<p>Faild to load emojis</p>`; 
        }

    }





    searchInput.addEventListener("input", (event) => {
        const searchEmoji = event.target.value.toLowerCase(); 
        const filterEmoji = allEmojis.filter(emoji => emoji.name.includes(searchEmoji)); 
        displayEmojies(filterEmoji); 

    })



    copyBtn.addEventListener("click", () => {
        const emojiToCopy = selectedEmoji.innerHTML; 

        navigator.clipboard.writeText(emojiToCopy).then(() => {
            copyBtn.textContent = "Copied"; 

            setTimeout(() => {
                copyBtn.textContent = "Copy"; 
            }, 2000); 
        })

    })




    fetchEmojis();




})