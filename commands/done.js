module.exports = {
    name : 'done',
    description : 'Done Commands',
    execute(message, args , Discord){
        const newEmbed1 = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('【✅】Transaction Completed')
        .addFields (
            {name : "【🇮🇩】", value : `Terimakasih sudah membeli di ${message.guild.name}\n Silahkan di tulis reps di <#959048732245123072>\n»»——————————⍟——————————««`},
            {name : "【🇬🇧】", value : `Thanks for buying in ${message.guild.name}\n Write down Reps in <#959048732245123072>\n `}
        )
        .setFooter('【👮】KRN STORE ADMIN');
            
            if(message.member.roles.cache.has('965238378989781034')) {
                message.channel.send(newEmbed1);
                message.delete();
            } else {
                message.channel.send('【❌】 Anda tidak mempunyai Role yang dibutuhkan.');
            }
       
        /*message.author.send("hello");/*
         /* message.channel.send(`Hello ${message.author.toString()}, and welcome!`);*/


    }



}