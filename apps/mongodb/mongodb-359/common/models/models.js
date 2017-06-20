Application.find({'where': {'staffId': 2}}, function(err, applications) {
  if (err) return err;
  var idsNotShown = applications.map(function(res) {
    return res.jobId;
  });
  Job.find({'where': {'id': {'nin': idsNotShown}}}, function(err, jobs) {
    if (err) return err;
    console.log('Jobs for user id 2' + JSON.stringify(jobs));
  });
});
