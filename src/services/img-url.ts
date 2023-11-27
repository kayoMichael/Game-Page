const getCroppedImageUrl = (url: string) => {
    const index = url.indexOf('media/') + 'meida/'.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl