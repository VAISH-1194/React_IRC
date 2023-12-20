function Home()
{
    return(
        <>
            <div class="main-container">
        <section class="sidebar">
            <div class="sidebar_title">
                <div class="waviy">
                    <span style="--i:1">T</span>
                    <span style="--i:2">O</span>
                    <span style="--i:3">D</span>
                    <span style="--i:4">O</span>
                    <span style="--i:5">L</span>
                    <span style="--i:6">I</span>
                    <span style="--i:7">S</span>
                    <span style="--i:8">T</span>
                   </div>
                   
                <a class="grow-effect" href="https://github.com/VAISH-1194" target="_blank">
                    <img src="hyetal.png" width="100" height="100"/>
                </a>
            </div>
            
            <div class="sidebar_top overflow-hidden">
                <nav>
                    <ul>
                        <li class="sidebar_item active">
                            <span class="sidebar_icon icon-container">
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                    d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
                                </svg>
                            </span>
                            Home
                        </li>
                        <li class="sidebar_item">
                            <span class="sidebar_icon icon-container">
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                    d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z" />
                                </svg>
                            </span>
                            Today
                        </li>
                        <li class="sidebar_item">
                            <span class="sidebar_icon icon-container">
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z" />
                                </svg>
                            </span>
                            This Week
                        </li>
                    </ul>
                </nav>
            </div>
            
            <div class="sidebar_center overflow-hidden">
                <h2 class="sidebar_subtitle">My Projects</h2>
                <nav class="overflow-hidden">
                    <ul class="sidebar_my-projects">
                        
                    </ul>
                </nav>
            </div>

            <div class="sidebar_bottom">
                <button type="button" id="newProject" class="active">
                    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    New Project
                </button>
                
                <div>
                    <form class="n-project_form">
                        <input type="text" name="formProjectTitle" placeholder="Project Title" autocomplete="off"/>
                        <button class="n-project_btn icon-container">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                            </svg>
                        </button>
                    </form>
                </div>
                
            </div>
        </section>
        
        <section class="workspace">
            <div class="resp-menu">
                <button class="resp-menu_btn icon-container" aria-label="Toggle menu visibility">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 
                        0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 
                        0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 
                        0 .75-.336.75-.75z" fill-rule="nonzero"></path>
                    </svg>
                </button>
            </div>
            
            <div class="workspace-container">
                <div class="workspace_header">
                    <div class="workspace_header-top">
                        <h3 class="workspace_title flex-g active">Home</h3>
                        <button type="button" class="workspace_actions-btn" aria-label="Sort tasks by date"
                        title="Sort tasks by date">
                        Sort
                    </button>
                </div>
                
                <div class="n-task active">
                    <button type="button" class="n-task_btn">
                            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                            </svg>
                            Add new task
                        </button>
                    </div>
                </div>

                
                <div class="workspace_content">
                    <div id="tasks">
                        <img id="tasksEmptyImage" class="tasks_empty-img" src="no_task-removebg-preview.png" alt="task-img"/>
                    </div>
                    
                    <h3 class="workspace_subtitle">Completed tasks</h3>
                    <div id="completedTasks">

                    </div>
                </div>
            </div>
        </section>
 

        <div class="task-modal">
            <div class="task-modal_header">
                <span class="task-modal_title"></span>
                <button type="button" class="close-modal-btn icon-container" aria-label="Close modal">
                    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,
                        2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,
                            12L17,8.41L15.59,7Z" />
                    </svg>
                </button>
            </div>

            <div class="task-modal_body">
                <form id="newTaskForm" class="task-modal_form" spellcheck="false" novalidate>
                    <div class="task-modal_w span-2-col">
                        <label for="f-nTaskTitle">
                            Title<span class="danger-color">*</span>
                        </label>
                        <input type="text" name="f-nTaskTitle" id="f-nTaskTitle" required/>
                        <span class="invalid-input">
                            Task must include a title.
                        </span>
                    </div>

                    <div class="task-modal_w span-2-col">
                        <label for="f-nTaskDetails">Details (notes)</label>
                        <textarea name="f-nTaskDetails" id="f-nTaskDetails" class="resize-vertical" rows="10"
                            placeholder="Important details of your task..." autocomplete="off"
                            maxlength="950"></textarea>
                    </div>

                    <div class="task-modal_w">
                        <label for="f-nTaskPriority" class="select-indicator">Priority</label>
                        <select name="f-nTaskPriority" id="f-nTaskPriority" class="task-modal_select"
                            autocomplete="off">
                            <option value="none">None</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>

                    <div class="task-modal_w">
                        <label for="f-nTaskDate">Due date</label>
                        <input type="date" name="f-nTaskDate" id="f-nTaskDate" autocomplete="off"/>
                    </div>

                    <input type="submit" class="task-modal_submit span-2-col" value="Create task"/>
                </form>

                <form id="editTaskForm" class="task-modal_form" spellcheck="false" novalidate>
                    <div class="task-modal_w span-2-col">
                        <label for="f-eTaskTitle">
                            Title<span class="danger-color">*</span>
                        </label>
                        <input type="text" name="f-eTaskTitle" id="f-eTaskTitle" required/>
                        <span class="invalid-input">
                            Task must include a title.
                        </span>
                    </div>

                    <div class="task-modal_w span-2-col">
                        <label for="f-eTaskDetails">Details (notes)</label>
                        <textarea name="f-eTaskDetails" id="f-eTaskDetails" class="resize-vertical" rows="10"
                            placeholder="Important details of your task..." autocomplete="off"
                            maxlength="950"></textarea>
                    </div>

                    <div class="task-modal_w">
                        <label for="f-eTaskPriority" class="select-indicator">Priority</label>
                        <select name="f-eTaskPriority" id="f-eTaskPriority" class="task-modal_select"
                            autocomplete="off">
                            <option value="none">None</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>

                    <div class="task-modal_w">
                        <label for="f-eTaskDate">Due date</label>
                        <input type="date" name="f-eTaskDate" id="f-eTaskDate" autocomplete="off"/>
                    </div>

                    <input type="submit" class="task-modal_submit span-2-col" value="Confirm edit"/>
                </form>
            </div>
        </div>

        <div class="dark-overlay"></div>
    </div>
    <div class ="footer">
        <h4><b>Copyright © Vaishnavi M. All rights reserved.</b></h4>
    </div>
        </>
    )
}

export default Home;