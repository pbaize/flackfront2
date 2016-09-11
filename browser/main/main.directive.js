app.directive('channelHead', function () {
  return {
    restrict: 'E',
    templateUrl: '/main/header.html'
  }
})

app.directive('flackTextbox', function () {
  return {
    restrict: 'E',
    templateUrl: '/main/text.html'
  }
})
