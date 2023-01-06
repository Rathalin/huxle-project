const key = 'gameState'

export function useLocalStorageSupport() {
  function initializeVariablesFromLocalStorage() {
    return localStorage.getItem(key)
  }

  function saveVariablesToLocalStorage(stateObject: object) {
    localStorage.setItem(key, JSON.stringify(stateObject))
  }

  function clearLocalStorage() {
    localStorage.removeItem(key)
  }

  return {
    initializeVariablesFromLocalStorage,
    saveVariablesToLocalStorage,
    clearLocalStorage,
  }
}
