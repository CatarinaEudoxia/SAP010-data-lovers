
export function pokeType(pokeArray, pokeChange) {
  if (pokeChange === "allPoke") {
    return pokeArray;
  }
  const typeFiltered = pokeArray.filter(pokemon => pokemon.type.includes(pokeChange))
  return typeFiltered;
}

export function pokeOrder(pokeArray,changeOrder) {
  const ordered = pokeArray.sort((a, b) => {
    if (changeOrder === "nameAsc") {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    } else if (changeOrder === "nameDesc") {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return 0;
      }
      return 0;
    } else if (changeOrder === "numberAsc") {
      if (a.num > b.num) {
        return 1;
      }
      if (a.num < b.num) {
        return -1;
      }
      return 0;
    } else if (changeOrder === "numberDesc") {
      if (a.num > b.num) {
        return -1;
      }
      if (a.num < b.num) {
        return 1;
      }
      return 0;
    }
  });

  return ordered;
}


