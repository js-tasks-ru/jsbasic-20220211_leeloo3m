function namify(users) {
  return users.reduce((acc, rec) => {
    return [...acc, rec.name];

  }, []);
}
