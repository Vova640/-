function getUserData(name) {
  const user = persons.find(p => p.name === name);
  if (!user) throw new Error('Unable to find user');
  return user;
}

function showUserInfo(name) {
  console.log('Loading');
  try {
    const user = getUserData(name);
    console.log(user);
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log('Loading finished');
  }
}

// Приклади
showUserInfo('John');    
showUserInfo('Unknown'); 
