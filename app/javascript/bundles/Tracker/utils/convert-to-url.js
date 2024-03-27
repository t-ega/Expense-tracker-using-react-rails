const convertStringToUrl = (string) => {
    return string.toLowerCase().replaceAll(" ", "-")
}

export default convertStringToUrl