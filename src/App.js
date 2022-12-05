const axios = require('axios');

function App() {
    return (
        <>
            <h1>Lorem ipsum dolor sit amet.</h1>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lobortis sem. In auctor fermentum lectus, eget gravida ipsum vehicula sit amet. Morbi vulputate, magna ut pretium imperdiet, augue lectus condimentum arcu, ac fringilla enim mi eget metus. Nulla tristique sollicitudin maximus. Pellentesque bibendum risus condimentum, cursus felis vel, viverra urna. Vestibulum eu finibus mauris. Sed molestie arcu quam, eu sagittis urna commodo ut. Pellentesque vel nisi ut justo efficitur pellentesque. Vestibulum luctus diam eget justo dignissim, accumsan dapibus quam aliquet. Sed eget enim ut turpis viverra iaculis in vitae mauris. Nunc fringilla felis quis mi ultricies, a consequat diam elementum. Donec vestibulum egestas auctor. Donec ac iaculis sapien, sit amet maximus nisl. Donec sed commodo lorem. Sed id luctus lectus, eget hendrerit leo. Duis elementum sapien ut lectus condimentum, a euismod sem lacinia.</p>
            <p>Duis volutpat mollis mi sed ultricies. Suspendisse mattis tortor ante, vel mattis velit placerat eu. Praesent varius purus et velit aliquet, ut feugiat metus iaculis. Donec ut metus et neque posuere viverra. Phasellus neque odio, posuere sit amet felis sit amet, suscipit pharetra dui. Pellentesque mollis dapibus orci, vel pretium augue posuere eu. Maecenas dapibus tempor ex, vitae varius erat hendrerit sed. Praesent ut odio vitae sapien volutpat tincidunt sed in ex. Aenean viverra placerat feugiat.</p>
            <p>Integer eu tellus mattis risus fermentum viverra. Pellentesque sollicitudin finibus risus sodales feugiat. Nam a ex sem. In hac habitasse platea dictumst. Integer magna urna, viverra feugiat egestas id, porta eu lacus. Etiam pulvinar in ligula et sodales. Phasellus nec justo suscipit, dapibus dui a, ornare sapien. Vestibulum gravida ultricies urna faucibus tristique. Nunc dictum urna hendrerit dolor ultrices elementum. Integer id diam sed tortor pellentesque consequat. Donec faucibus tincidunt enim. Nulla facilisi. Nam imperdiet blandit ligula, posuere vehicula libero interdum quis. Nunc ac rhoncus turpis, at porta nisi. Curabitur in vehicula urna. Phasellus viverra ornare scelerisque.</p>
            <p>Nam et lectus at elit tempus tristique. Quisque condimentum magna sit amet orci semper tincidunt. Nulla egestas urna scelerisque sem venenatis malesuada. Donec rutrum ac augue id imperdiet. Maecenas at tortor lacus. Donec gravida, libero et congue eleifend, ante risus tristique velit, nec congue leo neque quis eros. Maecenas laoreet risus nunc, sed imperdiet diam egestas ut. Integer rutrum lobortis ipsum, eu sollicitudin augue commodo id. Integer dapibus lacus vel sagittis rhoncus. Vivamus iaculis mollis erat, sed malesuada elit mattis vel. Donec porta metus sem, et faucibus justo hendrerit non. Nunc urna mauris, facilisis condimentum vulputate ut, congue sed nibh.</p>
            <p>Nunc purus diam, ultricies id est nec, fermentum pellentesque augue. Proin auctor ac est vel commodo. Pellentesque euismod nunc ligula, a bibendum velit tincidunt quis. Sed in condimentum nibh. Fusce tempus tortor sed fermentum porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit condimentum tellus commodo vestibulum. Maecenas egestas eleifend lorem id bibendum. Morbi pellentesque orci leo, at auctor nisi tristique ac. Proin dapibus ultricies metus, nec rutrum dolor dictum eget. Sed ut hendrerit libero, posuere elementum diam. Vestibulum libero tellus, interdum quis ligula in, sollicitudin lobortis nisi. Etiam sodales laoreet condimentum. Sed porta turpis massa, nec pellentesque mi condimentum sed. Nunc et pretium erat. Praesent pharetra magna blandit convallis rutrum.</p>
        
            <button onClick={() => buttonClick()}>Lorem ipsum?</button>
        </>
    );
}
  
function buttonClick() {
    const promise = axios.get('http://localhost:4000/hello');
    promise.then((res) => {
        alert(res.data);
    });
}

export default App;