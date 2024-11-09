export async function fetchApiData(searchTerm) {
    const apiUrl = `https://www.dnd5eapi.co/api/${searchTerm}`; // Use the passed search term

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return null;
    }
}
