resultsTemplate += `
                <div class="card w-96 bg-dark-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img id="avatar" alt="no internet" class="rounded-xl" src="${item.image.original}" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">${item.name}</h2>
                        <div class="card-actions">
                            <button class="btn btn-primary">Comment</button>
                        </div>
                    </div>
                </div>
            `;


export default resultsTemplate;