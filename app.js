const submitBtn = document.querySelector('.submit-btn')

const backEndURL = 'https://evangelism.onrender.com'

submitBtn.addEventListener('click',async ()=>{
    console.log('clicked');
    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value.toString()
    const region = document.getElementById('region').value
    const village = document.getElementById('village').value

    if(!name || !phone || !region || !village ){
        alert('cant be empty');
        return;
    }

    try {
        await fetch(`https://evangelism.onrender.com/save-soul`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, phone, region, village }),
        });
        document.querySelector('tbody').textContent = ""
        fetchPosts()
        document.getElementById('name').value = ""
        document.getElementById('phone').value = ""
        document.getElementById('region').value = ""
        document.getElementById('village').value = ""
       
      } catch (error) {
        console.error(error);
      }

})


async function fetchPosts() {
  try {
    const response = await fetch(`${backEndURL}/get-saved`);
    const posts = await response.json();
    
    const postsList = document.getElementById('postsList');
    const table = document.querySelector('table');

    const tbody = table.querySelector('tbody');
    
    posts.forEach(post => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${post.name}</td>
        <td>${post.region}</td>
      `;
      tbody.prepend(row);
    });
    postsList.appendChild(table);
  } catch (error) {
    console.error(error);
  }
}


fetchPosts()