export async function fetchApiData(searchTerm) {
    const apiUrl = `https://www.dnd5eapi.co${searchTerm}`; // Use the passed search term

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("success", data);
        return data;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return null;
    }
}
