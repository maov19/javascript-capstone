import logo from '../assets/movie.png';

const header = () => {
  const header = document.getElementById('header');
  header.innerHTML = `
    <nav class="flex justify-center items-center navbar bg-base-content text-primary-content">
        <div class="">
            <div class="avatar">
                <div class="w-24 mask mask-squircle">
                    <img src="${logo}" alt="website-logo">
                </div>
            </div>
             <a class="btn btn-ghost normal-case text-xl">Movie series (<span id="counter"></span>)</a>
        </div>
    </nav>
`;
};
export default header;