const userFilters = {
    all: (item) => true,
    userOnly: (item, userMonuments) => userMonuments.indexOf(item.id.toString()) !== -1,
    visitedOnly: (item, visitedMonuments) => visitedMonuments.indexOf(item.id.toString()) !== -1
}

export default userFilters