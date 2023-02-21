import { useState } from "react";
import { useGetAllPostQuery, useCreatePostMutation } from "./redux/services/apiCore";
function App() {
  let { data, isLoading, isFetching, error } = useGetAllPostQuery();
  let [ addPost, result ] = useCreatePostMutation();
  console.log('data', data);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    userId: 1,
  })
  function handleAssignData(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    addPost(formData);
    setFormData({
      title: "",
      body: "",
      userId: 1,
    })
    document.getElementById('addModalCloseBtn').click();
  }
  return (
    <>
      {
        isFetching ? "Loading...." :
          <div className="container mt-4">
            <div className="row">
              <div className="col-6"><h3 className="mb-3">RTK- Query</h3></div>
              <div className="col-6">
                <button className="btn btn-success" style={{ 'float': 'right' }} data-bs-toggle="modal" data-bs-target="#addModal">Add New</button>
              </div>
            </div>
            <div class="row mt-3">
              {
                data?.length > 0 ? data?.map((el, index) => {
                  return (
                    <>
                      <div class="col-12 mb-3">
                        <h4>{el.id}. {el.title}</h4>
                        <p>{el.body}</p>
                      </div>
                      <hr />
                    </>
                  )
                }) : "No data found!!"
              }

            </div>

            {/* modal */}
            <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <form onSubmit={(e) => { handleFormSubmit(e) }}>
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Add Post</h1>
                      <button type="button" class="btn-close" id="addModalCloseBtn" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Title</label>
                        <input type="text" class="form-control" aria-describedby="emailHelp" name="title" value={formData.title} onChange={(e) => { handleAssignData(e) }} />
                      </div>
                      <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="body" value={formData.body} onChange={(e) => { handleAssignData(e) }}></textarea>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
      }
    </>

  );
}

export default App;
