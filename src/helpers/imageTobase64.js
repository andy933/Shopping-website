const imageTobase64 = async (photo) => {
    const extractor = new FileReader()
    extractor.readAsDataURL(photo)

    const content = await new Promise((resolve, reject) => {
        extractor.onload = () => resolve(extractor.result)
        extractor.onerror = error => reject(error)
    })

    return content
}

export default imageTobase64