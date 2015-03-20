function getCurrentUser(localStorageService){
  return localStorageService.get("user");
}

function setCurrentUser(localStorageService, user){
  localStorageService.set("user", user);
}

function clearCurrentUser(localStorageService){
  localStorageService.remove("user")
}