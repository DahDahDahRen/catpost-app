//! Get Cat posts
const getAllCatPost = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/v1/cat");

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

//! Delete Cat post
const deleteCatPost = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/api/v1/cat/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

//! Create Cat post
const createPost = async (catPost) => {
  try {
    for (let i of catPost.entries()) {
      console.log(i);
    }

    const response = await fetch("http://localhost:8000/api/v1/cat", {
      method: "POST",
      body: catPost,
    });

    const post = await response.json();

    return post;
  } catch (error) {
    console.log(error);
  }
};

//! View component
const CatForm = () => {
  const catForm = document.querySelector(".create-post");
  const catPostTitle = document.querySelector("#title");
  const catPostBody = document.querySelector("#body");
  const catPostList = document.querySelector(".cat-post_list");

  return {
    catForm,
    catPostTitle,
    catPostBody,
    catPostList,
  };
};

const CatPost = () => {
  // Cat post element
  const catPostList = document.querySelector(".cat-post_list");

  // Generate a HTML plate
  const generateCatPostHTML = (catPost) => {
    return `
        <li class="cat-post_item" data-id=${catPost._id}>
            <div class="cat-post_header">
              <h4>${catPost.title}</h4>

              <button class="cat-post_delete">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
            <p>${catPost.body}</p>
        </li>
    `;
  };

  // Append the Catpost
  const appendCatPost = (post) => {
    catPostList.insertAdjacentHTML("afterbegin", post);
  };

  const empyCatPostContainer = () => {
    catPostList.innerHTML = "";
  };

  return {
    catPostList,
    generateCatPostHTML,
    appendCatPost,
    empyCatPostContainer,
  };
};

//! Initial load
document.addEventListener("DOMContentLoaded", async (e) => {
  const posts = await getAllCatPost();

  CatPost().empyCatPostContainer();

  posts.result.forEach((post) => {
    const html = CatPost().generateCatPostHTML(post);

    CatPost().appendCatPost(html);
  });
});

//! Create a post
CatForm().catForm.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();

    const formData = new FormData(CatForm().catForm);

    await createPost(formData);

    const posts = await getAllCatPost();

    posts.result.forEach((post) => {
      const html = CatPost().generateCatPostHTML(post);

      CatPost().appendCatPost(html);
    });
  } catch (error) {
    console.log(error);
  }
});

//! Delete a post
CatForm().catPostList.addEventListener("click", async (e) => {
  if (e.target.classList.contains("fa-solid")) {
    const postId = e.target.closest(".cat-post_item").dataset.id;

    await deleteCatPost(postId);

    const posts = await getAllCatPost();

    posts.result.forEach((post) => {
      const html = CatPost().generateCatPostHTML(post);

      CatPost().appendCatPost(html);
    });

    e.target.closest(".cat-post_item").remove();
  }
});
