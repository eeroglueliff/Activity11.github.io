$(document).ready(function() {

    $("#nav_list a").click(function(event) {
        event.preventDefault();
        var speakerTitle = $(this).attr("title");
        loadSpeakerData(speakerTitle);
    });

    function loadSpeakerData(speakerTitle) {
        var fileName = speakerTitle + ".json";
        

        $.ajax({
            url: "json_files/" + fileName,
            dataType: "json",
            success: function(data) {
                $("main").empty();
                var speaker = data.speakers[0];
                
                var mainContent = `
                    <h1>${speaker.title}</h1>
                    <img src="${speaker.image}" alt="${speaker.speaker}">
                    <h2>${speaker.month}<br>${speaker.speaker}</h2>
                    <p>${speaker.text}</p>
                `;

                $("main").append(mainContent);
            },
            error: function() {
                alert("An error occurred while loading the data.");
            }
        });
    }

    loadSpeakerData('toobin');
}); // end ready