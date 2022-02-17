function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  document.body.append(ul);
  let result = document.querySelector('ul');
  let fragment = new DocumentFragment(); 
  

  for (let i = 0; i < friends.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = `${friends[i].firstName} ${friends[i].lastName}`;
    fragment.appendChild(li);
    
  }
  result.append(fragment);
  return result;
}
