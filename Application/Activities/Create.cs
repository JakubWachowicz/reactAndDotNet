using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        public class Command:IRequest{
            public Activity Activity {get;set;}
        }

        public class Handler : IRequestHandler<Command>
        {
        public Activity Activity { get; }
            public DataContext DataContext { get; }

            public Handler(DataContext dataContext){
                DataContext = dataContext;
            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                DataContext.Activities.Add(request.Activity);
                await DataContext.SaveChangesAsync();
            }
        }
    }
}