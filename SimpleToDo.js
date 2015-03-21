Tasks = new Mongo.Collection("tasks");


if (Meteor.isClient) {


    Template.todomain.helpers({
        tasklist: function () {
            return Tasks.find({});
        }
    })

    Template.todomain.events({
        'submit #taskForm': function (events) {

            var taskvalue = events.currentTarget.task.value;

            events.currentTarget.task.value = "";
            console.log('test');
            Tasks.insert({
                task: taskvalue,
                status: false
            });


            return false;
        },

        'click .collection-item': function (events) {

            var task_id = events.currentTarget.dataset.id;

            var task_status = events.currentTarget.dataset.status;

            task_status = !task_status;

            Tasks.update({
                _id: task_id
            }, {
                $set: {
                    status: task_status
                }
            });



        }
    })

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}