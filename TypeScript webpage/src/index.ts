const getUsername: HTMLInputElement = document.querySelector('#user') as HTMLInputElement;
const formSubmit = document.querySelector('#form') as HTMLFormElement;
// const formSubmit: HTMLFormElement | null = document.querySelector('#form');
const main_container = document.querySelector('.main_container') as HTMLElement;

// defining the contract of an object
interface userData {
    id: number;
    login: string;
    avatar_url: string;
    location: string;
    url: string;
}

// reusable method
async function myCustomFetcher<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`network request failed & status - ${response.status}`);
    }
    const data = await response.json();
    return data;
}

// displaying card UI
const showResultUI = (singleUser: userData): void => {
    const { avatar_url, login, url, location } = singleUser;
    main_container.insertAdjacentHTML('beforeend', `
    <div class='card'>
     <img src='${avatar_url}' alt='${login}' />
     <hr />
      <div class='card-footer'>
       <img src='${avatar_url}' alt='${login}' />
       <a href='${url}'>Github</a>
      </div>
    </div>
    `)
}

function fetchUserData(url: string): void {
    myCustomFetcher<userData[]>(url, {}).then((userInfo: userData[]): void => {
        for (const singleUser of userInfo) {
            showResultUI(singleUser);
        }
    })
}

// default function call
fetchUserData('https://api.github.com/users');

// search functionality
formSubmit.addEventListener('submit', async (e: SubmitEvent): Promise<void> => {
    e.preventDefault();
    const searchTerm: string = getUsername.value.toLowerCase();
    try {
        const url: string = "https://api.github.com/users";
        const allUserData: userData[] = await myCustomFetcher<userData[]>(url, {});
        const matchingUsers: userData[] = allUserData.filter((user: userData): boolean => {
            return user.login.toLowerCase().includes(searchTerm);
        })
        main_container.innerHTML = '';
        if (matchingUsers.length === 0) {
            main_container.insertAdjacentHTML('beforeend', `<p class='empty-msg'>No matching users found</p>`);
        } else {
            for (const singleUser of matchingUsers) {
                showResultUI(singleUser);
            }
        }
    } catch (err) {
        console.log(err);
    }
})
