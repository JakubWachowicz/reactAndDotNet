using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command:IRequest{
            public Activity Activity{get;set;}
        }
        public class Handler : IRequestHandler<Command>
        {
            public Handler(DataContext context)
            {
                Context = context;
            }
 
            public DataContext Context { get; }

            public Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = Context.FindAsync(request.Activity.Id);
                
            }
        }
    }
}