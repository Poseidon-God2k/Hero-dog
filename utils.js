export const drawStatusText = (context, input, player) =>{
    context.font ='20px Poppins';
    context.fillText('Last input: '+ input.lastKey, 20, 20)
    context.font ='20px Poppins';
    context.fillText('Last activeKey: '+ input.activeKey, 20, 40)
    context.font ='20px Poppins';
    context.fillText('Active state: '+ player.currentState.state, 20, 60)
    context.font ='20px Poppins';
    context.fillText('Score: '+ player.score, 20, 80)
}